"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";

function StarfieldContent() {
  return (
    <Stars
      radius={100} // Distance from camera (adjust: higher = stars further away)
      depth={50} // How far back stars extend (adjust: lower = more compact)
      count={5000} // Number of stars (adjust: higher = more dense)
      factor={4} // Size factor (adjust: lower = smaller stars)
      saturation={0} // Color saturation (0 = white/blue only)
      fade={true} // Stars fade at edges (smooth transition)
      speed={0.1} // Drift speed (adjust: lower = slower, higher = faster)
    />
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
        camera={{ position: [0, 0, 1], fov: 75 }}
      >
        <color attach="background" args={["#000000"]} />
        <Suspense fallback={null}>
          <StarfieldContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
