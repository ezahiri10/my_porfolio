"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function VantaDots({
  children,
}: {
  children: React.ReactNode;
}) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const loadVanta = async () => {
      const vantaModule = await import("vanta/dist/vanta.dots.min.js");
      const VANTA = window.VANTA || vantaModule.default;

      vantaEffectRef.current = VANTA.DOTS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0066ff,
        backgroundColor: 0x000000,
        size: 3.0,
        spacing: 15.0,
      });
    };

    loadVanta();

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
