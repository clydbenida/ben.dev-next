"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { VoxelDesk } from "./components/VoxelDesk";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  return (
    <div className="w-auto max-w-[500px] relative mb-[-48px]">
      <Canvas
        fallback={<div>No 3d sorry</div>}
        shadows
        dpr={[1, 2]}
        camera={{ fov: 25, position: [25, 10, 50], zoom: 0.75 }}
        style={{
          maxWidth: '300px',
          minWidth: '240px',
          width: '70vw',
          height: '450px',
        }}
      >
        <Stage controls={ref} preset="soft" intensity={0} environment="city">
          <directionalLight color={0x9cdbf6} intensity={5} />
          <meshStandardMaterial color="#fff" emissive={"#fff"} />
          <OrbitControls
            autoRotate
            ref={ref}
            enablePan={false}
            minZoom={50}
            enableZoom={false}
          />
          <VoxelDesk scale={0.5} />
        </Stage>
      </Canvas>
    </div>
  );
}
