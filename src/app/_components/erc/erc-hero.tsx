import Link from "next/link";

export function ErcHero() {
  return (
    <section
      className="relative z-10 flex min-h-[65vh] flex-col items-center justify-center px-6 pt-36 pb-24 text-center"
      id="erc-hero"
    >
      {/* Heading */}
      <h1 className="text-highlight-gradient-dark-bg font-inter max-w-4xl text-4xl leading-tight font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(227,6,217,0.55)] sm:text-5xl md:text-6xl lg:text-7xl">
        Equity Research Competition
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
        Equity Research Competition merupakan kompetisi yang akan menguji
        kemampuan peserta dalam melakukan{" "}
        <strong className="text-infest-pink font-bold">
          analisis terhadap saham di pasar keuangan dan keterampilan investasi
        </strong>{" "}
        melalui penelitian terhadap peluang investasi.
      </p>

      {/* CTA Button */}
      <Link
        className="bg-infest-pink mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_0_25px_rgba(227,6,217,0.5)] transition hover:shadow-[0_0_40px_rgba(227,6,217,0.7)] hover:brightness-110 sm:text-base"
        href="/register?comp=erc"
      >
        Daftar Sekarang →
      </Link>
    </section>
  );
}
