import Link from "next/link";

import { GradientBorderCard } from "@/components/gradient-border-card";

interface RulesCardProps {
  title: string;
  rules: string[];
  registerHref?: string;
}

export function RulesCard({
  title,
  rules,
  registerHref = "#",
}: RulesCardProps) {
  return (
    <section className="relative z-10 flex flex-1 flex-col items-center px-4 pt-28 pb-24 md:pt-44 md:pb-32">
      <h1 className="glow-text-1 text-center text-4xl font-bold text-white md:text-6xl lg:text-[80px]">
        {title}
      </h1>

      <GradientBorderCard
        className="mt-10 w-full max-w-5xl md:mt-14"
        innerClassName="px-8 py-8 text-left md:px-12 md:py-12 lg:px-16 lg:py-16"
      >
        <ol className="list-decimal space-y-4 pl-5 text-sm leading-relaxed text-white/90 marker:font-semibold marker:text-white md:space-y-5 md:text-base">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ol>
      </GradientBorderCard>

      <div className="mt-10 grid w-full max-w-5xl gap-4 sm:grid-cols-3 sm:gap-8 md:mt-14">
        <Link
          className="bg-gradient-5 text-infest-white shadow-box-shadow-inset relative flex min-h-[72px] items-center justify-center rounded-full px-6 py-4 text-center text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-95 md:text-[18px]"
          href="/register"
        >
          <span className="text-shadow-links">Kembali</span>
        </Link>
        <a
          className="bg-gradient-5 text-infest-white shadow-box-shadow-inset relative flex min-h-[72px] items-center justify-center rounded-full px-6 py-4 text-center text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-95 md:text-[18px]"
          href={registerHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-shadow-links">Daftar Sekarang</span>
        </a>
        <a
          className="bg-gradient-5 text-infest-white shadow-box-shadow-inset relative flex min-h-[72px] items-center justify-center rounded-full px-6 py-4 text-center text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-95 md:text-[18px]"
          href="https://bit.ly/GuidebookINFEST2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-shadow-links">Download Guidebook</span>
        </a>
      </div>
    </section>
  );
}
