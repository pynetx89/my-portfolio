"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleColor?: string;
}

const Sparkles = ({
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleColor = "#FFC107",
}: SparklesProps) => {
  const sparkles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (maxSize - minSize) + minSize,
    delay: Math.random() * 3,
  }));

  return (
    <div className={cn("absolute inset-0", className)} style={{ background }}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}rem`,
            height: `${sparkle.size}rem`,
            background: particleColor,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
