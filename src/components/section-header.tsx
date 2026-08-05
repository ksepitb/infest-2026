interface SectionHeaderProps {
  title: string;
  highlightText?: string;
  noSpaceBeforeHighlight?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  highlightText,
  noSpaceBeforeHighlight = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`relative flex w-full max-w-[1175px] items-center justify-center gap-4 py-4 sm:gap-6 ${className}`}
    >
      {/* Garis Kiri: Fade in dari transparan ke Magenta */}
      <div className="h-[2px] flex-1 bg-[linear-gradient(90deg,rgba(115,115,115,0)_0%,rgba(255,184,0,0.3)_40%,#E306D9_100%)]" />

      {/* Judul Utama */}
      <h2 className="font-poppins shrink-0 text-center text-3xl font-bold tracking-tight text-white italic drop-shadow-[0_0_25px_rgba(227,6,217,0.4)] sm:text-4xl lg:text-5xl">
        {title}
        {highlightText && (
          <>
            {!noSpaceBeforeHighlight && " "}
            <span className="text-highlight-gradient-dark-bg glow-text-1">
              {highlightText}
            </span>
          </>
        )}
      </h2>

      {/* Garis Kanan: Mirror Magenta ke Transparan */}
      <div className="h-[2px] flex-1 bg-[linear-gradient(270deg,rgba(115,115,115,0)_0%,rgba(255,184,0,0.3)_40%,#E306D9_100%)]" />
    </div>
  );
}
