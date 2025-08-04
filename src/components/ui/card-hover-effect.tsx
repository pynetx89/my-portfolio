"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    name?: string;
    technology?: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="relative group block h-full w-full"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.3,
            }}
            className="rounded-2xl h-full w-full p-6 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-all duration-300 ease-in-out"
          >
            <div className="relative z-50">
              <div>
                {item.name && (
                  <p className="text-zinc-100 tracking-wide leading-relaxed text-sm mb-2 font-medium">
                    {item.name}
                  </p>
                )}
                {item.technology && (
                  <p className="text-zinc-300 tracking-wide leading-relaxed text-xs mb-4 uppercase font-semibold">
                    {item.technology}
                  </p>
                )}
                <h4 className="text-zinc-100 font-bold tracking-wide text-xl mb-4">
                  {item.title}
                </h4>
                <p className="text-zinc-400 tracking-wide leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
