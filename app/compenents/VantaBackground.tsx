"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
    VANTA: any;
  }
}

export default function VantaBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    const initVanta = async () => {
      // Load THREE.js library
      if (!window.THREE) {
        await new Promise<void>((resolve) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
          script.async = true;
          script.onload = () => resolve();
          document.head.appendChild(script);
        });
      }

      // Load Vanta STARS
      await new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/vanta.js/0.5.24/vanta.stars.min.js";
        script.async = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });

      // Initialize Vanta with tuned settings for small, subtle stars
      setTimeout(() => {
        if (window.VANTA && window.THREE && containerRef.current) {
          try {
            vantaRef.current = window.VANTA.STARS({
              el: containerRef.current,
              THREE: window.THREE,
              // ===== STAR APPEARANCE =====
              color: 0xaabbff, // Soft blue-white stars
              backgroundColor: 0x000000, // Near-black background
              size: 0.9, // Small star size (adjust: lower = smaller)
              spacing: 45.0, // Star density (adjust: higher = fewer stars, sparser)
              // ===== MOTION =====
              speed: 0.5, // Slow drift speed (adjust: lower = slower movement)
              // ===== INTERACTION =====
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              // ===== RESPONSIVENESS =====
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
            });
            console.log("✓ Vanta STARS initialized successfully");
          } catch (err) {
            console.error("✗ Error initializing Vanta:", err);
          }
        }
      }, 150);
    };

    initVanta();

    // Cleanup on unmount
    return () => {
      if (vantaRef.current) {
        try {
          vantaRef.current.destroy();
          vantaRef.current = null;
        } catch (err) {
          console.error("Error destroying Vanta:", err);
        }
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      {/* Vanta background container - fixed, behind all content */}
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      />
      
      {/* Content layer - relative positioning, z-index 10 to sit on top */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
}
