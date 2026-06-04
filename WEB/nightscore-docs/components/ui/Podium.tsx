"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Podium({ category }: { category?: string }) {
  const data = [
    { rank: 2, name: "Ana P.", score: "42 🍺", height: "h-32", delay: 0.2 },
    { rank: 1, name: "Carlos M.", score: "56 🍺", height: "h-40", delay: 0 },
    { rank: 3, name: "David S.", score: "38 🍺", height: "h-24", delay: 0.4 },
  ];

  return (
    <div className="flex items-end justify-center gap-2 sm:gap-4 h-64 pt-8">
      {data.map((item, i) => (
        <motion.div 
          key={`${category}-${i}`}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: item.delay, type: "spring", stiffness: 100 }}
        >
          {item.rank === 1 && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Crown className="w-8 h-8 text-yellow-500 mb-2 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            </motion.div>
          )}
          <div className="text-center mb-2">
            <div className="font-bold text-sm text-white">{item.name}</div>
            <div className="text-xs text-ns-cyan font-mono">{item.score}</div>
          </div>
          <div 
            className={cn(
              "w-16 sm:w-20 rounded-t-lg flex items-start justify-center pt-2 font-display font-bold text-2xl relative overflow-hidden",
              item.height,
              item.rank === 1 ? "bg-gradient-to-t from-ns-violet/20 to-ns-fuchsia/80 text-white shadow-[0_-10px_30px_rgba(236,72,153,0.3)]" : "bg-[rgba(255,255,255,0.1)] text-ns-muted"
            )}
          >
            {/* Shimmer effect for 1st place */}
            {item.rank === 1 && (
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: "200% auto" }} />
            )}
            <span className="relative z-10">{item.rank}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
