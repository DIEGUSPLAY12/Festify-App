import * as React from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

function DefaultIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="12" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M16 12V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 22h12M18 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("empty-state animate-slide-down-fade", className)}>
      <span className="text-ns-muted mb-4">
        {icon ?? <DefaultIcon />}
      </span>
      <p className="text-card-title text-white mb-2">{title}</p>
      {description && (
        <p className="text-body-regular text-ns-muted max-w-[320px]">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
