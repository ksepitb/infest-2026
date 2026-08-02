import type { Metadata } from "next";
import Image from "next/image";

import { ErcCountdown } from "~/app/_components/erc/erc-countdown";
import { ErcDescription } from "~/app/_components/erc/erc-description";
import { ErcFaq } from "~/app/_components/erc/erc-faq";
import { ErcHero } from "~/app/_components/erc/erc-hero";
import { ErcPrizePool } from "~/app/_components/erc/erc-prize-pool";
import { ErcTimeline } from "~/app/_components/erc/erc-timeline";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export const metadata: Metadata = {
  title: "Equity Research Competition | INFEST 2026",
  description:
    "Ikut serta dalam Equity Research Competition INFEST 2026 — kompetisi analisis saham dan pasar keuangan tingkat nasional yang diselenggarakan oleh KSEP ITB.",
  openGraph: {
    title: "Equity Research Competition | INFEST 2026",
    description:
      "Kompetisi analisis ekuitas dan pasar keuangan tingkat nasional untuk mahasiswa S1/D3/D4 se-Indonesia.",
    siteName: "INFEST 2026",
  },
};

export default function ErcPage() {
  return (
    <main className="font-inter relative min-h-screen overflow-hidden bg-[#040008] text-white antialiased">
      {/* ── Ambient Background Glow Blobs ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Layer 13 1 (Top Hero Bloom) */}
        <div className="pointer-events-none absolute top-[80px] left-1/2 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-[#E306D9]/30 mix-blend-screen blur-[130px]" />

        {/* Layer 13 2 (Mid-Section Violet Bloom) */}
        <div className="pointer-events-none absolute top-[22%] left-[-80px] h-[450px] w-[450px] rounded-full bg-[#E306D9]/20 mix-blend-plus-lighter blur-[120px]" />

        {/* Layer 13 3 (Timeline Deep Purple Glow) */}
        <div className="pointer-events-none absolute top-[52%] right-[70px] h-[500px] w-[500px] rounded-full bg-[#380356]/50 blur-[110px]" />

        {/* Grup Layer 9: Ornamental Vector Dots — Kiri bawah */}
        <Image
          alt=""
          className="absolute bottom-[35%] left-[-40px] w-[260px] opacity-20 mix-blend-screen md:w-[360px]"
          height={500}
          src="/images/dotted1.svg"
          width={500}
        />

        {/* Grup Layer 9: Ornamental Vector Dots — Kanan bawah */}
        <Image
          alt=""
          className="absolute right-[-40px] bottom-[8%] w-[260px] opacity-20 mix-blend-screen md:w-[360px]"
          height={500}
          src="/images/dotted1.svg"
          width={500}
        />
      </div>

      {/* ── Main Content Container (max-w 1920px) ─────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[1920px]">
        {/* Navigation */}
        <Navbar />

        {/* Page Sections */}
        <ErcHero />
        <ErcDescription />
        <ErcPrizePool />
        <ErcTimeline />
        <ErcCountdown />
        <ErcFaq />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
