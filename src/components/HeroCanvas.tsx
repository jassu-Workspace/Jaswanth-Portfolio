"use client";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Tracks whether the hero canvas is actually on screen.
 * Stops the WebGL render loop when scrolled out of view or tab hidden,
 * which is the #1 cause of scroll jank — a 60fps RAF running while off-screen.
 */
function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let lastIO = true;
    const update = () => setInView(!document.hidden && lastIO);
    const io = new IntersectionObserver(
      ([entry]) => {
        lastIO = entry.isIntersecting;
        update();
      },
      { rootMargin: "100px" }
    );
    io.observe(el);
    document.addEventListener("visibilitychange", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [ref]);
  return inView;
}

function DriftParticles({ count = 100 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const [{ positions, colors }] = useState(() => {
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
    return { positions: pos, colors: col };
  });

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.012;
    meshRef.current.rotation.x = Math.sin(t * 0.048) * 0.018;
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
      outerRef.current.rotation.z = state.clock.elapsedTime * 0.048;
    }
    if (innerRef.current) {
      innerRef.current.rotation.z = -state.clock.elapsedTime * 0.084;
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
    linesRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.04;
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

type HeroCanvasProps = {
  lowQuality?: boolean;
};

export default function HeroCanvas({ lowQuality = false }: HeroCanvasProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef);

  // Lower DPR during intro/morph to maximize FPS; restore when settled.
  const dpr: [number, number] = lowQuality ? [0.5, 0.7] : [1, 1.3];
  const powerPreference = lowQuality ? "low-power" : "high-performance";

  return (
    <div ref={wrapRef} style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 9], fov: 62 }}
        dpr={dpr}
        gl={{ antialias: false, powerPreference }}
        // "never" fully stops the RAF loop when off-screen — the key scroll-jank fix.
        frameloop={inView ? "always" : "never"}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.46} />
        <DriftParticles count={lowQuality ? 40 : 100} />
        <RouteRings />
        <CrossLines />
        <fog attach="fog" args={["#efe5d0", 12, 34]} />
      </Canvas>
    </div>
  );
}
