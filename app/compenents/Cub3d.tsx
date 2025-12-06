"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Cube3D() {
  return (
    <div style={{ height: "300px" }}>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 4, 4]} />

        <mesh rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="skyblue" wireframe />
        </mesh>
      </Canvas>
    </div>
  );
}
