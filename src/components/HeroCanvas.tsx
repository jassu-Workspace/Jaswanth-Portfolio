"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 120 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      const t = Math.random();
      col[i * 3] = t < 0.7 ? 0 : 0.96;
      col[i * 3 + 1] = t < 0.7 ? 0.82 : 0.78;
      col[i * 3 + 2] = t < 0.7 ? 1 : 0.26;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.08;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.07} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function Grid() {
  const gridRef = useRef<THREE.GridHelper>(null);
  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
  });
  return (
    <gridHelper
      ref={gridRef}
      args={[60, 40, "#00d0ff", "#00d0ff"]}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, -6, -5]}
    >
      <meshBasicMaterial color="#00d0ff" opacity={0.04} transparent />
    </gridHelper>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "low-power" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <Particles count={150} />
      <Grid />
      <fog attach="fog" args={["#0a191f", 15, 40]} />
    </Canvas>
  );
}
