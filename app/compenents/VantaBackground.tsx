"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function VantaBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const initVanta = async () => {
      try {
        // Import Vanta Stars
        await import("vanta/dist/vanta.stars.min.js");

        const VANTA = window.VANTA;

        vantaEffectRef.current = VANTA.STARS({
          el: containerRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x000000,
          size: 0.8,
          spacing: 30.0,
        });
      } catch (error) {
        console.error("Failed to initialize Vanta stars:", error);
      }
    };

    initVanta();

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-black"
    >
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
