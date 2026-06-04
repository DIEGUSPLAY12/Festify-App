"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";

export function PrismaSnippet({ schemaCode }: { schemaCode: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(schemaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightPrisma = (code: string) => {
    return code
      .replace(/\b(model|enum)\b/g, '<span class="text-ns-violet font-bold">$1</span>')
      .replace(/\b(String|Int|Boolean|DateTime|Json|Float|Decimal)\b/g, '<span class="text-ns-cyan">$1</span>')
      .replace(/\b(uuid|uuid\(\)|now\(\)|dbgenerated\("[^"]*"\))\b/g, '<span class="text-blue-400">$1</span>')
      .replace(/(@[\w.]+)/g, '<span class="text-yellow-500">$1</span>')
      .replace(/("[^"]*")/g, '<span class="text-emerald-400">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-gray-500 italic">$1</span>');
  };

  return (
    <div className="mt-8 border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden bg-[#0A0A0F]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[rgba(255,255,255,0.1)] flex items-center justify-center text-white font-mono text-xs font-bold">P</div>
          <span className="font-medium text-white text-sm">Schema Prisma</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-ns-muted" /> : <ChevronDown className="w-4 h-4 text-ns-muted" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="relative p-4 overflow-x-auto text-sm font-mono leading-relaxed bg-[#050508] border-t border-[rgba(255,255,255,0.05)]">
              <button 
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] text-white transition-colors"
                title="Copiar código"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
              
              <pre className="text-gray-300 pr-12 whitespace-pre">
                <code dangerouslySetInnerHTML={{ __html: highlightPrisma(schemaCode) }} />
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
