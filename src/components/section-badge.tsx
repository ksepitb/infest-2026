import type { ReactNode } from "react";

interface SectionBadgeProps {
  children: ReactNode;
}

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <div className="inline-flex rounded-full bg-gradient-to-r from-[#FFB800] via-[#FFC840] to-[#FFB800] p-[1.5px] shadow-[0_0_24px_rgba(255,184,0,0.25)]">
      <div className="rounded-full bg-[#0D001A] px-8 py-2.5">
        <span className="text-lg font-bold tracking-wide text-white italic drop-shadow-[0_0_6px_rgba(255,184,0,0.4)] sm:text-xl md:text-2xl">
          {children}
        </span>
      </div>
    </div>
  );
}
