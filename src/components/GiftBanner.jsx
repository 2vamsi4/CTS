import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import GiftModel from "./GiftModel";
import "../ui/GiftBanner.css";

export default function GiftBanner() {
       const isDark = true; // or detect from CSS / theme

  return (
    <section className="gift-banner">
      <div className="banner-text">
        <h1>Special Surprise 🎁</h1>
        <p>Something extraordinary awaits you</p>
        <button className="banner-btn">Explore Now</button>
      </div>

      <div className="canvas-wrapper">
        <Canvas
          shadows
          camera={{ position: [0, 3, 8], fov: 45 }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.7} />

          <directionalLight
            position={[6, 10, 6]}
            intensity={1.8}
            castShadow
          />

          <pointLight position={[0, 2, 2]} intensity={2.2} />

          <Suspense fallback={null}>
              <GiftModel theme={isDark ? "dark" : "light"} />
          </Suspense>

          <Environment preset="studio" />

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
    </section>
  );
}
