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
      className={`relative mx-auto flex w-full max-w-[1509px] items-center justify-center gap-4 py-4 sm:gap-6 ${className}`}
    >
      {/* Garis Kiri: Fade in dari transparan ke Magenta */}
      <div className="h-[2px] flex-1 bg-[linear-gradient(90deg,rgba(115,115,115,0)_0%,rgba(255,184,0,0.3)_40%,#E306D9_100%)]" />

      {/* Judul Utama */}
      <h2 className="font-poppins shrink-0 text-center text-3xl font-bold tracking-tight italic sm:text-4xl lg:text-5xl">
        <span className="text-infest-white glow-text-3">{title}</span>
        {highlightText && (
          <>
            {!noSpaceBeforeHighlight && " "}
            <span className="text-highlight-gradient-dark-bg">
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
