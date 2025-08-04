"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 4,
    height: Math.random() * 60 + 40,
    width: Math.random() * 2 + 1,
  }));

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_60%_50%_at_center,white,transparent)]",
        className
      )}
    >
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute bg-gradient-to-t from-transparent via-cyan-500/30 to-transparent"
          style={{
            left: `${beam.left}%`,
            width: `${beam.width}px`,
            height: `${beam.height}%`,
            top: `${Math.random() * 50}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scaleY: [0, 1, 0],
            rotateX: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: beam.animationDelay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional subtle glow effects */}
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};
