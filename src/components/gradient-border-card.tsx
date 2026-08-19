import type { ReactNode } from "react";

interface GradientBorderCardProps {
  children: ReactNode;
  /** Extra classes for the outer gradient-border wrapper (e.g. max-width). */
  className?: string;
  /** Extra classes for the inner dark box (e.g. custom padding). */
  innerClassName?: string;
}

/**
 * Card dengan border gradient (FFEED2 -> #683A9C) dan body gelap #020003.
 * Pola desain yang dipakai di ERC/BCC description — dipakai ulang di card teks lain.
 * Jika `innerClassName` diberikan, ia menggantikan padding/align default (bukan menimpa),
 * jadi pemakai mengontrol padding & perataan sepenuhnya.
 */
export function GradientBorderCard({
  children,
  className = "",
  innerClassName,
}: GradientBorderCardProps) {
  return (
    <div
      className={`flex h-full max-w-4xl flex-col rounded-3xl p-[2px] shadow-[0_0_30px_rgba(147,0,156,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_45px_rgba(227,6,217,0.35)] ${className}`}
      style={{
        background: "linear-gradient(180deg, #FFEED2, #683A9C)",
      }}
    >
      <div
        className={`h-full flex-1 rounded-3xl bg-[#020003] shadow-[inset_2px_2px_8px_rgba(255,255,255,0.08)] ${
          innerClassName ?? "px-8 py-10 text-center sm:px-14 sm:py-14"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
