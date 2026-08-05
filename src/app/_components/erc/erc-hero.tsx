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
      className="mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center px-4 pt-32 pb-16 text-center md:pt-40 md:pb-24"
      id="erc-hero"
    >
      <h1 className="font-poppins mx-auto max-w-5xl bg-gradient-to-b from-[#E306D9] to-[#FFFEFF] bg-clip-text text-center font-sans text-4xl leading-tight font-extrabold tracking-[-0.02em] text-transparent md:text-5xl lg:text-6xl">
        Equity Research Competition
      </h1>
      <div className="mt-8 flex flex-col items-center gap-6">
        <p className="font-inter max-w-4xl font-sans text-base leading-[140%] text-[#FFFEFF] sm:text-xl lg:text-2xl lg:leading-[125%]">
          Equity Research Competition merupakan kompetisi yang akan menguji
          kemampuan peserta dalam melakukan{" "}
          <span className="bg-gradient-to-r from-[#FF5AF7] to-[#FFB800] bg-clip-text font-semibold text-transparent">
            analisis terhadap saham di pasar keuangan dan keterampilan investasi
          </span>{" "}
          melalui penelitian terhadap peluang investasi.
        </p>
        <Link
          href="/register?comp=erc"
          className="font-poppins flex h-[64px] w-full max-w-[527px] items-center justify-center gap-3 rounded-[60px] bg-[linear-gradient(90deg,#FFB800_0%,#93009C_60%,#93009C_72%,#380356_100%)] font-sans text-lg leading-[117%] font-bold text-[#FFFEFF] shadow-[0_0_8px_#380356,0_0_8px_rgba(255,184,0,0.6),0_0_40px_rgba(255,198,50,0.6)] transition hover:brightness-110 sm:text-xl md:h-[87px] md:gap-[12px] md:text-2xl"
        >
          <span>Daftar Sekarang</span>
          <ArrowRight className="h-6 w-6 shrink-0 text-[#FFFEFF] md:h-7 md:w-7" />
        </Link>
      </div>
    </section>
  );
}
