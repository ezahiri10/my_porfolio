"use client";
import { useEffect, useRef } from "react";

const MoonBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    let rotationAngle = 0;
    let starTwinkle = 0;
    let animationId: number;

    const drawMoon = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 3;
      const moonRadius = Math.min(canvas.width, canvas.height) * 0.15;

      // Clear canvas with gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, "#0a0e27");
      bgGradient.addColorStop(1, "#1a1f3a");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling stars
      starTwinkle += 0.05;
      for (let i = 0; i < 150; i++) {
        const x = Math.sin(i * 12.9898) * canvas.width * 1.5;
        const y = Math.cos(i * 78.233) * canvas.height * 1.5;
        const size = Math.abs(Math.sin(i * 43.614 + starTwinkle) * 1.5);
        const opacity = Math.abs(Math.sin(i * 17.432 + starTwinkle * 0.5)) * 0.8 + 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fillRect(x % canvas.width, y % canvas.height, size, size);
      }

      // Save context for rotation
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle);

      const moonGradient = ctx.createRadialGradient(
        -moonRadius * 0.3,
        -moonRadius * 0.3,
        0,
        0,
        0,
        moonRadius * 1.2
      );
      moonGradient.addColorStop(0, "#e8e8e8");
      moonGradient.addColorStop(0.5, "#c0c0c0");
      moonGradient.addColorStop(1, "#808080");

      ctx.fillStyle = moonGradient;
      ctx.beginPath();
      ctx.arc(0, 0, moonRadius, 0, Math.PI * 2);
      ctx.fill();

      const craters = [
        { x: -moonRadius * 0.4, y: -moonRadius * 0.3, r: moonRadius * 0.15, opacity: 0.6 },
        { x: moonRadius * 0.3, y: -moonRadius * 0.4, r: moonRadius * 0.1, opacity: 0.5 },
        { x: -moonRadius * 0.2, y: moonRadius * 0.35, r: moonRadius * 0.12, opacity: 0.55 },
        { x: moonRadius * 0.25, y: moonRadius * 0.2, r: moonRadius * 0.08, opacity: 0.5 },
        { x: 0, y: -moonRadius * 0.1, r: moonRadius * 0.06, opacity: 0.45 },
        { x: -moonRadius * 0.5, y: moonRadius * 0.1, r: moonRadius * 0.09, opacity: 0.52 },
        { x: moonRadius * 0.45, y: moonRadius * 0.35, r: moonRadius * 0.07, opacity: 0.48 },
      ];

      craters.forEach((crater) => {
        const craterGradient = ctx.createRadialGradient(
          crater.x - crater.r * 0.3,
          crater.y - crater.r * 0.3,
          0,
          crater.x,
          crater.y,
          crater.r
        );
        craterGradient.addColorStop(0, `rgba(100, 100, 100, ${crater.opacity})`);
        craterGradient.addColorStop(0.7, `rgba(80, 80, 80, ${crater.opacity * 0.7})`);
        craterGradient.addColorStop(1, `rgba(60, 60, 60, ${crater.opacity * 0.4})`);

        ctx.fillStyle = craterGradient;
        ctx.beginPath();
        ctx.arc(crater.x, crater.y, crater.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(200, 200, 200, ${crater.opacity * 0.3})`;
        ctx.lineWidth = crater.r * 0.15;
        ctx.beginPath();
        ctx.arc(crater.x, crater.y, crater.r, 0, Math.PI * 0.5);
        ctx.stroke();
      });

      ctx.globalAlpha = 0.1;
      for (let i = 0; i < 50; i++) {
        const angle = (i / 50) * Math.PI * 2;
        const dist = (Math.random() - 0.5) * moonRadius * 1.8;
        const x = Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist;
        ctx.fillStyle = Math.random() > 0.5 ? "#ffffff" : "#000000";
        ctx.fillRect(x, y, Math.random() * 3, Math.random() * 3);
      }
      ctx.globalAlpha = 1;

      const glowGradient = ctx.createRadialGradient(0, 0, moonRadius * 0.8, 0, 0, moonRadius * 1.3);
      glowGradient.addColorStop(0, "rgba(200, 200, 220, 0.1)");
      glowGradient.addColorStop(1, "rgba(100, 150, 255, 0.05)");
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(0, 0, moonRadius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      rotationAngle += 0.002;
      animationId = requestAnimationFrame(drawMoon);
    };

    drawMoon();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ display: "block" }}
    />
  );
};

export default MoonBackground;
