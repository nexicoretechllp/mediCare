"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MovingBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
}

export function MovingBorder({
  children,
  className,
  containerClassName,
  duration = 4,
}: MovingBorderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-[1px]",
        containerClassName,
      )}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, #4CC417, transparent, #0909FF, transparent)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Inner content */}
      <div className={cn("relative rounded-2xl bg-zinc-950", className)}>
        {children}
      </div>
    </div>
  );
}
