"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridProps {
  className?: string;
  dotSize?: number;
  gap?: number;
  dotColor?: string;
  activeColor?: string;
  proximity?: number;
}

export const InteractiveGrid = ({
  className,
  dotSize = 1.2,
  gap = 24,
  dotColor = "rgba(255, 255, 255, 0.15)",
  activeColor = "rgba(76, 196, 23, 0.6)",
  proximity = 150,
}: InteractiveGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const requestRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const columns = Math.ceil(canvas.width / gap);
    const rows = Math.ceil(canvas.height / gap);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const x = j * gap + gap / 2;
        const y = i * gap + gap / 2;

        const dx = mouseRef.current.x - x;
        const dy = mouseRef.current.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let size = dotSize;
        let color = dotColor;

        if (distance < proximity) {
          const factor = 1 - distance / proximity;
          size = dotSize * (1 + factor * 2.5);

          // Interpolate color (simplistic)
          if (factor > 0.5) {
            color = activeColor;
          } else {
            color = `rgba(255, 255, 255, ${0.15 + factor * 0.4})`;
          }
        }

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
    }

    requestRef.current = requestAnimationFrame(draw);
  }, [dotSize, gap, dotColor, activeColor, proximity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    requestRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(requestRef.current);
    };
  }, [draw]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute inset-0 z-0 h-full w-full pointer-events-auto",
        className,
      )}
    />
  );
};
