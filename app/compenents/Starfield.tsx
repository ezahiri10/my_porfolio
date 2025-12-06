"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function StarfieldContent() {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesRef = useRef<{
    positions: Float32Array;
    velocities: Float32Array;
  } | null>(null);

  // Generate star geometry and animation data
  const { geometry, positions, velocities } = useMemo(() => {
    const starCount = 1500; // Adjust for density: higher = more stars
    const posArray = new Float32Array(starCount * 3);
    const velArray = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      // Random position within a large sphere
      posArray[i] = (Math.random() - 0.5) * 200; // x
      posArray[i + 1] = (Math.random() - 0.5) * 200; // y
      posArray[i + 2] = (Math.random() - 0.5) * 200; // z

      // Random velocity for drift motion
      velArray[i] = (Math.random() - 0.5) * 0.1; // x velocity (adjust for speed)
      velArray[i + 1] = (Math.random() - 0.5) * 0.1; // y velocity
      velArray[i + 2] = (Math.random() - 0.5) * 0.05; // z velocity (slower on z)
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    return {
      geometry: geom,
      positions: posArray,
      velocities: velArray,
    };
  }, []);

  // Store particle data for animation
  useMemo(() => {
    particlesRef.current = { positions, velocities };
  }, [positions, velocities]);

  // Animate stars each frame
  useFrame(() => {
    if (!pointsRef.current || !particlesRef.current) return;

    const positions = particlesRef.current.positions;
    const velocities = particlesRef.current.velocities;
    const time = Date.now() * 0.001; // Time in seconds

    for (let i = 0; i < positions.length; i += 3) {
      // Update position with velocity
      positions[i] += velocities[i]; // x
      positions[i + 1] += velocities[i + 1]; // y
      positions[i + 2] += velocities[i + 2]; // z

      // Wrap around when stars go too far
      const wrapDistance = 100;
      if (positions[i] > wrapDistance) positions[i] = -wrapDistance;
      if (positions[i] < -wrapDistance) positions[i] = wrapDistance;
      if (positions[i + 1] > wrapDistance) positions[i + 1] = -wrapDistance;
      if (positions[i + 1] < -wrapDistance) positions[i + 1] = wrapDistance;
      if (positions[i + 2] > wrapDistance) positions[i + 2] = -wrapDistance;
      if (positions[i + 2] < -wrapDistance) positions[i + 2] = wrapDistance;
    }

    geometry.attributes.position.needsUpdate = true;

    // Gentle rotation for parallax effect
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001;
      pointsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.3} // Adjust star size: lower = smaller
        color={0xaabbff} // Soft blue-white
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
        fog={false}
      />
    </points>
  );
}

export default function Starfield() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
        camera={{ position: [0, 0, 50], fov: 75 }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 50, 300]} />
        <StarfieldContent />
      </Canvas>
    </div>
  );
}
