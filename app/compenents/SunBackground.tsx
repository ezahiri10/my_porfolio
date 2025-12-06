"use client";
import { useEffect, useRef } from "react";

const SunBackground = () => {
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
    let animationId: number;

    const drawSun = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 3;
      const sunRadius = Math.min(canvas.width, canvas.height) * 0.12;

      // Clear canvas with bright sky gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, "#87ceeb");
      bgGradient.addColorStop(0.4, "#e0f6ff");
      bgGradient.addColorStop(1, "#fffacd");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle);

      // Intense sun glow with halo effect
      const glowGradient = ctx.createRadialGradient(0, 0, sunRadius * 0.3, 0, 0, sunRadius * 2);
      glowGradient.addColorStop(0, "rgba(255, 220, 0, 0.9)");
      glowGradient.addColorStop(0.3, "rgba(255, 180, 0, 0.5)");
      glowGradient.addColorStop(0.7, "rgba(255, 100, 0, 0.2)");
      glowGradient.addColorStop(1, "rgba(255, 50, 0, 0)");
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(0, 0, sunRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // Sun gradient (bright core)
      const sunGradient = ctx.createRadialGradient(
        -sunRadius * 0.15,
        -sunRadius * 0.15,
        0,
        0,
        0,
        sunRadius * 1.1
      );
      sunGradient.addColorStop(0, "#ffff99");
      sunGradient.addColorStop(0.4, "#ffdd00");
      sunGradient.addColorStop(0.8, "#ffaa00");
      sunGradient.addColorStop(1, "#ff7700");

      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(0, 0, sunRadius, 0, Math.PI * 2);
      ctx.fill();

      // Solar surface details (rotating flares)
      ctx.fillStyle = "rgba(255, 100, 0, 0.5)";
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + rotationAngle;
        const x = Math.cos(angle) * (sunRadius * 0.7);
        const y = Math.sin(angle) * (sunRadius * 0.7);
        const size = sunRadius * 0.12;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Sun corona rings
      ctx.strokeStyle = "rgba(255, 200, 0, 0.4)";
      ctx.lineWidth = sunRadius * 0.15;
      ctx.beginPath();
      ctx.arc(0, 0, sunRadius * 0.9, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // Draw light rays emanating from sun
      ctx.strokeStyle = "rgba(255, 220, 0, 0.2)";
      ctx.lineWidth = 2;
      for (let i = 0; i < 16; i++) {
        const angle = (i / 16) * Math.PI * 2;
        const startX = centerX + Math.cos(angle) * (sunRadius + 10);
        const startY = centerY + Math.sin(angle) * (sunRadius + 10);
        const endX = centerX + Math.cos(angle) * (sunRadius + 60);
        const endY = centerY + Math.sin(angle) * (sunRadius + 60);
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Sunlight reflection on ground (strong yellow glow)
      const reflectionGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        canvas.height,
        canvas.width
      );
      reflectionGradient.addColorStop(0, "rgba(255, 220, 100, 0.15)");
      reflectionGradient.addColorStop(0.5, "rgba(255, 200, 80, 0.1)");
      reflectionGradient.addColorStop(1, "rgba(255, 180, 60, 0)");
      ctx.fillStyle = reflectionGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Bright spot reflection (water/glass reflection effect)
      const reflectionX = centerX + Math.cos(rotationAngle) * sunRadius * 0.3;
      const reflectionY = centerY * 2;
      const spotGradient = ctx.createRadialGradient(reflectionX, reflectionY, 0, reflectionX, reflectionY, 120);
      spotGradient.addColorStop(0, "rgba(255, 255, 200, 0.4)");
      spotGradient.addColorStop(0.5, "rgba(255, 240, 150, 0.2)");
      spotGradient.addColorStop(1, "rgba(255, 220, 100, 0)");
      ctx.fillStyle = spotGradient;
      ctx.fillRect(reflectionX - 120, reflectionY - 120, 240, 240);

      // Update rotation
      rotationAngle += 0.003;
      animationId = requestAnimationFrame(drawSun);
    };

    drawSun();

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

export default SunBackground;
