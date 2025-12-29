import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sparkles, RoundedBox } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";

export default function GiftModel({ theme = "dark" }) {
  const lidRef = useRef();
  const glowRef = useRef();
  const ringGroup = useRef();
  const soundRef = useRef();

  const { camera } = useThree();

  /* 🎨 Theme */
  const COLORS = {
    dark: {
      box: "#020617",
      lid: "#020617",
      glow: "#38bdf8",
      sparkle: "#7dd3fc",
      gold: "#facc15",
      diamond: "#e0f2fe",
    },
    light: {
      box: "#e5e7eb",
      lid: "#d1d5db",
      glow: "#2563eb",
      sparkle: "#60a5fa",
      gold: "#f59e0b",
      diamond: "#c7d2fe",
    },
  };

  const c = COLORS[theme];

  /* 🔊 SOUND – SAFE & RELIABLE */
  useEffect(() => {
  const listener = new THREE.AudioListener();
  camera.add(listener);

  const sound = new THREE.Audio(listener);
  const loader = new THREE.AudioLoader();

  loader.load("/sounds/reveal.mp3", (buffer) => {
    sound.setBuffer(buffer);
    sound.setVolume(1);
  });

  soundRef.current = sound;

  const enableAudio = async () => {
    const ctx = THREE.AudioContext.getContext();
    if (ctx.state !== "running") {
      await ctx.resume();
    }
    sound.play(); // ✅ NOW IT WORKS
    window.removeEventListener("pointerdown", enableAudio);
  };

  window.addEventListener("pointerdown", enableAudio);

  return () => {
    camera.remove(listener);
    window.removeEventListener("pointerdown", enableAudio);
  };
}, []);



 useEffect(() => {
  const tl = gsap.timeline({ delay: 0.6 });

  // 1️⃣ Open lid
  tl.to(lidRef.current.rotation, {
    x: -Math.PI / 1.7,
    duration: 2.6,
    ease: "power4.out",
  });

  // 2️⃣ Glow intensifies
  tl.to(
    glowRef.current.material,
    {
      emissiveIntensity: 4.5,
      duration: 1.4,
      ease: "power3.out",
    },
    "-=1.8"
  );

  // 3️⃣ Ring rises OUT of box
  tl.to(
    ringGroup.current.position,
    {
      y: 1.25,
      duration: 2.2,
      ease: "power4.out",
    },
    "-=1.2"
  );

  // 4️⃣ Ring appears
  tl.to(
    ringGroup.current.scale,
    {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.8,
      ease: "back.out(2)",
    },
    "-=1.6"
  );

  // 5️⃣ Elegant rotation
  tl.fromTo(
    ringGroup.current.rotation,
    { y: -1 },
    { y: Math.PI * 2, duration: 3, ease: "power2.out" },
    "-=2"
  );
}, []);


  /* 🌟 IDLE MOTION */
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ringGroup.current.rotation.y += 0.004;
    ringGroup.current.position.y = 1.25 + Math.sin(t * 1.6) * 0.05;
    glowRef.current.material.emissiveIntensity =
      3.2 + Math.sin(t * 3) * 0.6;
  });

  return (
    <group scale={1.5} position={[0, -1.3, 0]}>
      {/* 🎁 BOX */}
      <RoundedBox args={[2.4, 1.4, 2.4]} radius={0.15} smoothness={6}>
        <meshPhysicalMaterial
          color={c.box}
          roughness={0.35}
          metalness={0.25}
          clearcoat={0.6}
        />
      </RoundedBox>

      {/* LID */}
      <group ref={lidRef} position={[0, 0.75, -1.2]}>
        <RoundedBox args={[2.4, 0.3, 2.4]} radius={0.12}>
          <meshPhysicalMaterial
            color={c.lid}
            roughness={0.3}
            metalness={0.3}
            clearcoat={0.7}
          />
        </RoundedBox>
      </group>

      {/* INNER GLOW */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.85, 64, 64]} />
        <meshStandardMaterial
          emissive={c.glow}
          emissiveIntensity={3}
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* ✨ SPARKLES */}
      <Sparkles
        count={160}
        scale={[2.6, 2.6, 2.6]}
        size={9}
        speed={0.7}
        color={c.sparkle}
      />

      {/* 💍 DIAMOND RING */}
<group
  ref={ringGroup}
  position={[0, -0.4, 0]} // INSIDE box
  scale={0}
>
        {/* Gold Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.35, 0.06, 32, 100]} />
          <meshPhysicalMaterial
            color={c.gold}
            metalness={1}
            roughness={0.15}
            clearcoat={1}
          />
        </mesh>

        {/* Diamond */}
        <mesh position={[0, 0.25, 0]}>
          <octahedronGeometry args={[0.18, 3]} />
          <meshPhysicalMaterial
            color={c.diamond}
            metalness={0.1}
            roughness={0}
            transmission={1}
            thickness={1}
            emissive={c.diamond}
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>
    </group>
  );
}
