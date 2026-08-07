"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 16, scale: 0.995 },
    animate: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0, scale: 1 },
    exit: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: -12, scale: 0.995 },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
