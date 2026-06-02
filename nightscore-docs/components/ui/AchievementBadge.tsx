"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

export interface AchievementBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  achievement: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  };
}

export function AchievementBadge({ achievement, className, ...props }: AchievementBadgeProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[achievement.icon] || Icons.HelpCircle;

  return (
    <div
      className={cn("relative w-full aspect-square perspective-1000 group cursor-pointer", className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      {...props}
    >
      <div
        className={cn(
          "w-full h-full transition-transform duration-500 transform-style-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glassmorphism rounded-2xl flex flex-col items-center justify-center p-4 border border-[rgba(255,255,255,0.05)] shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <div className={cn("w-12 h-12 rounded-full mb-3 flex items-center justify-center bg-gradient-to-br", achievement.color)}>
            <IconComponent className="text-white w-6 h-6" />
          </div>
          <h4 className="font-display font-semibold text-sm text-center line-clamp-2">{achievement.title}</h4>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden glassmorphism rounded-2xl flex flex-col items-center justify-center p-4 rotate-y-180 border border-[rgba(124,58,237,0.3)] bg-[rgba(19,19,26,0.8)]">
          <h4 className="font-display font-bold text-sm text-ns-fuchsia mb-2">{achievement.title}</h4>
          <p className="text-xs text-ns-muted text-center leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
}
