interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mx-auto my-8 w-full max-w-4xl rounded-lg border-y border-white/10 bg-[linear-gradient(90deg,rgba(115,115,115,0)_0%,rgba(255,184,0,0.3)_25%,#E306D9_50%,rgba(255,184,0,0.3)_75%,rgba(115,115,115,0)_100%)] px-6 py-3 text-center">
      <h2 className="font-serif text-xl font-medium tracking-wide text-white italic md:text-2xl">
        {title}
      </h2>
    </div>
  );
}
