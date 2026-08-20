import Image from "next/image";

export function HeaderLogo() {
  return (
    <div className="mt-0 flex w-full items-center justify-center gap-2 sm:gap-6 md:mt-12 md:gap-8 lg:gap-10">
      {/* INFEST Wordmark */}
      <div className="shrink-0 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] filter">
        <Image
          src="/images/INFESTPUTIH.png"
          alt="INFEST Logo"
          width={700}
          height={300}
          priority
          className="h-auto w-[200px] object-contain sm:w-[350px] md:w-[420px] lg:w-[600px]"
        />
      </div>

      {/* Chevrons, Year, and Title Lockup */}
      <div className="shrink-0 gap-3 sm:gap-4 md:gap-5">
        {/* Text Title Stack */}
        <div className="justify-center text-left leading-none">
          <h1 className="glow-text-1 text-[25px] leading-[1.1] font-bold text-white sm:text-[28px] md:text-5xl lg:text-7xl">
            <span className="block whitespace-nowrap">Pre-Event &amp;</span>
            <span className="block whitespace-nowrap">Main Event</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
