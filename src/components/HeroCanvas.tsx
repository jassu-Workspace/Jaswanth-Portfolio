"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function DriftParticles({ count = 140 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 34;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const t = Math.random();
      col[i * 3] = t < 0.75 ? 0.22 : 0.8;
      col[i * 3 + 1] = t < 0.75 ? 0.45 : 0.58;
      col[i * 3 + 2] = t < 0.75 ? 0.61 : 0.26;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.03;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.72} sizeAttenuation />
    </points>
  );
}

function RouteRings() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (outerRef.current) {
      outerRef.current.rotation.z = state.clock.elapsedTime * 0.08;
    }

    if (innerRef.current) {
      innerRef.current.rotation.z = -state.clock.elapsedTime * 0.14;
    }
  });

  return (
    <group position={[0, -1.4, -2.8]} rotation={[-0.45, 0, 0]}>
      <mesh ref={outerRef}>
        <ringGeometry args={[5, 5.2, 120]} />
        <meshBasicMaterial color="#3f769d" transparent opacity={0.22} side={THREE.DoubleSide} />
      </mesh>

      <mesh ref={innerRef}>
        <ringGeometry args={[3.2, 3.35, 120]} />
        <meshBasicMaterial color="#c39a4a" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function CrossLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group ref={linesRef} position={[0, -1.2, -2.8]}>
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <planeGeometry args={[0.03, 7]} />
        <meshBasicMaterial color="#21405b" transparent opacity={0.26} />
      </mesh>
      <mesh rotation={[0, 0, -Math.PI / 4]}>
        <planeGeometry args={[0.03, 7]} />
        <meshBasicMaterial color="#21405b" transparent opacity={0.26} />
      </mesh>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 62 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "low-power" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.46} />
      <DriftParticles count={150} />
      <RouteRings />
      <CrossLines />
      <fog attach="fog" args={["#efe5d0", 12, 34]} />
    </Canvas>
  );
}
