"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={cn("relative rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[#0A0A0F]", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.05)]">
        <span className="text-xs font-mono text-ns-muted lowercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-ns-muted hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {isCopied ? <Check className="w-4 h-4 text-ns-success" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed whitespace-pre">
        <code>{code}</code>
      </div>
    </div>
  );
}
