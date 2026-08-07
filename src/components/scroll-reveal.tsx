"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
}

const directionOffset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
};

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 32,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = directionOffset[direction];

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        x: offset.x ? offset.x * distance : 0,
        y: offset.y ? offset.y * distance : 0,
      };

  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
