"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MOCKUP_BLOCKS, KEY_SCREENS } from "@/lib/docs/mockups-data";
import { useMockupsStore } from "@/lib/store/mockupsStore";
import { cn } from "@/lib/utils";

export function BlockSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeBlock = useMockupsStore(state => state.activeBlock);
  const setActiveBlock = useMockupsStore(state => state.setActiveBlock);

  useEffect(() => {
    const blockParam = searchParams.get("block");
    if (blockParam === "keyscreens") {
      setActiveBlock("keyscreens");
    } else if (blockParam && MOCKUP_BLOCKS.find(b => b.id === blockParam)) {
      setActiveBlock(blockParam as any);
    }
  }, [searchParams, setActiveBlock]);

  const handleSelect = (id: string) => {
    setActiveBlock(id as any);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("block", id);
    router.push(`?${newParams.toString()}#mockups-grid`, { scroll: false });
    
    // Smooth scroll al grid
    setTimeout(() => {
      document.getElementById("mockups-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="sticky top-14 z-40 bg-[#050508]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.05)] py-4">
      <div className="container px-4 sm:px-6">
        <div className="flex overflow-x-auto custom-scrollbar pb-2 snap-x snap-mandatory gap-3 items-center">
          
          <button
            onClick={() => handleSelect("keyscreens")}
            className={cn(
              "shrink-0 snap-start px-4 py-2 rounded-full border transition-all duration-200 flex items-center gap-2",
              activeBlock === "keyscreens"
                ? "bg-amber-500/15 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                : "bg-[#13131A] border-[rgba(255,255,255,0.08)] text-ns-muted hover:scale-[1.02] hover:bg-[#1A1A2E]"
            )}
          >
            <span>⭐</span>
            <span className="font-semibold text-sm whitespace-nowrap">Pantallas Clave</span>
            <span className="text-xs opacity-70">({KEY_SCREENS.length})</span>
          </button>

          <div className="w-px h-6 bg-[rgba(255,255,255,0.1)] shrink-0 mx-1" />

          {MOCKUP_BLOCKS.map(block => {
            const isActive = activeBlock === block.id;
            return (
              <button
                key={block.id}
                onClick={() => handleSelect(block.id)}
                className={cn(
                  "shrink-0 snap-start px-4 py-2 rounded-full border transition-all duration-200 flex items-center gap-2",
                  isActive
                    ? "text-white"
                    : "bg-[#13131A] border-[rgba(255,255,255,0.08)] text-ns-muted hover:scale-[1.02] hover:bg-[#1A1A2E]"
                )}
                style={isActive ? {
                  backgroundColor: `${block.color}25`,
                  borderColor: block.color,
                  boxShadow: `0 0 15px ${block.color}30`
                } : {}}
              >
                {isActive && (
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: block.color }} />
                )}
                <span>{block.icon}</span>
                <span className="font-semibold text-sm whitespace-nowrap">{block.name}</span>
                <span className="text-xs opacity-70">({block.screens.length})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
