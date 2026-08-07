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
      className="mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center px-4 pt-44 pb-12 text-center sm:px-6 sm:pt-52 sm:pb-16 md:pt-56 md:pb-20 lg:px-8 lg:pt-60"
      id="erc-hero"
    >
      <h1 className="font-poppins mx-auto w-full max-w-[1509px] bg-gradient-to-b from-[#E306D9] to-[#FFFEFF] bg-clip-text text-center font-sans text-[45px] leading-tight font-extrabold tracking-[-0.02em] break-words text-transparent sm:text-[54px] lg:text-[72px]">
        Equity Research Competition
      </h1>
      <div className="mt-8 flex w-full max-w-full flex-col items-center gap-6">
        <p className="font-inter w-full max-w-[1509px] font-sans text-[24px] leading-relaxed break-words text-[#FFFEFF] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] md:text-[29px] lg:text-[35px]">
          Equity Research Competition merupakan kompetisi yang akan menguji
          kemampuan peserta dalam melakukan{" "}
          <span className="bg-gradient-to-r from-[#FF5AF7] to-[#FFB800] bg-clip-text font-semibold text-transparent">
            analisis terhadap saham di pasar keuangan dan keterampilan investasi
          </span>{" "}
          melalui penelitian terhadap peluang investasi.
        </p>
        <Link
          href="/register?comp=erc"
          className="font-poppins flex h-[64px] w-full max-w-[527px] items-center justify-center gap-3 rounded-[60px] bg-[linear-gradient(90deg,#380356_0%,#93009C_28%,#93009C_40%,#FFB800_100%)] font-sans text-lg leading-[117%] font-bold text-[#FFFEFF] shadow-[0_0_8px_#380356,0_0_8px_rgba(255,184,0,0.6),0_0_40px_rgba(255,198,50,0.6)] transition hover:brightness-110 sm:text-xl md:h-[87px] md:gap-[12px] md:text-2xl"
        >
          <span>Daftar Sekarang</span>
          <ArrowRight className="h-6 w-6 shrink-0 text-[#FFFEFF] md:h-7 md:w-7" />
        </Link>
      </div>
    </section>
  );
}
