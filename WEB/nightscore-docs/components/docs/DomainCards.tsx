"use client";

import { motion } from "framer-motion";
import { DOMAINS } from "@/lib/docs/database-schema";
import { cn } from "@/lib/utils";

export function DomainCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
      {DOMAINS.map((domain, idx) => (
        <motion.div
          key={domain.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className={cn(
            "group relative glassmorphism rounded-2xl p-6 border-t-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(124,58,237,0.3)] cursor-default",
            domain.borderColor
          )}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className={cn("text-xl font-display font-bold", domain.textColor)}>
              {domain.name}
            </h3>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-ns-muted border border-[rgba(255,255,255,0.1)]">
              {domain.techBadge}
            </span>
          </div>
          
          <p className="text-sm text-gray-300 mb-6 min-h-[60px]">
            {domain.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {domain.tables.map(table => (
              <span 
                key={table}
                className={cn(
                  "text-[11px] font-mono px-2 py-1 rounded-md border",
                  domain.bgColor,
                  domain.borderColor,
                  domain.textColor
                )}
              >
                {table}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
