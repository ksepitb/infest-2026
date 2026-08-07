import Image from "next/image";

export function HeaderLogo() {
  return (
    <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row md:items-center md:gap-8 lg:gap-10">
      {/* INFEST Wordmark */}
      <div className="drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] filter">
        <Image
          src="/images/INFESTPUTIH.png"
          alt="INFEST Logo"
          width={700}
          height={300}
          priority
          className="h-auto w-[250px] object-contain sm:w-[350px] md:w-[420px] lg:w-[600px]"
        />
      </div>

      {/* Chevrons, Year, and Title Lockup */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
        {/* Text Title Stack */}
        <div className="flex flex-col justify-center text-left leading-none">
          <h1 className="glow-text-1 text-[18px] leading-[1.1] font-bold text-white sm:text-[28px] md:text-7xl">
            <span className="block whitespace-nowrap">Pre-Event &amp;</span>
            <span className="block whitespace-nowrap">Main Event</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
