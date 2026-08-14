import Image from "next/image";
import Link from "next/link";

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ErcHero() {
  return (
    <section
      className="relative mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center px-4 pt-44 pb-12 text-center sm:px-6 sm:pt-52 sm:pb-16 md:pt-56 md:pb-20 lg:px-8 lg:pt-60"
      id="erc-hero"
    >
      {/* Left Ornament */}
      <div className="pointer-events-none absolute top-[20%] left-[-2%] z-0 opacity-80 select-none max-md:opacity-60 md:top-[25%] lg:top-[10%]">
        <Image
          src="/images/ornament1-left.png"
          alt=""
          width={600}
          height={600}
          className="w-[140px] object-contain sm:w-[250px] md:w-[300px] lg:w-[700px]"
        />
      </div>
      {/* Right Ornament */}
      <div className="pointer-events-none absolute top-[20%] right-[-2%] z-0 opacity-80 select-none max-md:opacity-60 md:top-[25%] lg:top-[10%]">
        <Image
          src="/images/ornament1-right.png"
          alt=""
          width={600}
          height={600}
          className="w-[140px] object-contain sm:w-[250px] md:w-[300px] lg:w-[600px]"
        />
      </div>
      <h1 className="text-highlight-gradient-dark-bg text-shadow-links mx-auto w-full max-w-[1509px] text-[45px] leading-tight font-bold tracking-normal break-words text-transparent sm:text-[54px] md:text-[60px] lg:text-[72px]">
        Equity Research Competition
      </h1>
      <div className="mt-4 flex w-full max-w-6xl flex-col items-center gap-6">
        <p className="font-inter text-infest-white text-shadow-links text-md w-full max-w-[1300px] leading-relaxed break-words md:text-lg">
          Equity Research Competition merupakan kompetisi yang akan menguji
          kemampuan peserta dalam melakukan{" "}
          <span className="bg-gradient-to-r from-[#FF5AF7] to-[#FFB800] bg-clip-text font-semibold text-transparent">
            analisis terhadap saham di pasar keuangan dan keterampilan investasi
          </span>{" "}
          melalui penelitian terhadap peluang investasi.
        </p>
        <Link
          href="/register?comp=erc"
          className="font-poppins bg-gradient-5 text-infest-white glow-box-golden mt-6 flex h-[64px] w-auto items-center justify-center gap-3 rounded-[60px] px-10 text-lg leading-[117%] font-bold tracking-wide transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-95 sm:text-xl md:h-[75px] md:gap-[12px] md:text-2xl"
        >
          <span className="text-shadow-links">Daftar Sekarang</span>
          <ArrowRight className="stroke-infest-white h-6 w-6 md:h-7 md:w-7" />
        </Link>
      </div>
    </section>
  );
}
