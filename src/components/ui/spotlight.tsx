"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  children: React.ReactNode;
}

export function Spotlight({ className, children }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-inherit opacity-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(76,196,23,0.06), rgba(9,9,255,0.04), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
