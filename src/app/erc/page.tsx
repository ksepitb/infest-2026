import type { Metadata } from "next";

import { ErcCountdown } from "@/app/_components/erc/erc-countdown";
import { ErcDecorations } from "@/app/_components/erc/erc-decorations";
import { ErcDescription } from "@/app/_components/erc/erc-description";
import { ErcFaq } from "@/app/_components/erc/erc-faq";
import { ErcHero } from "@/app/_components/erc/erc-hero";
import { ErcPrizePool } from "@/app/_components/erc/erc-prize-pool";
import { ErcTimeline } from "@/app/_components/erc/erc-timeline";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

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
    <main className="bg-gradient-3 relative min-h-screen overflow-x-hidden text-white antialiased">
      {/* Layer 2: Decorative Overlay */}
      <ErcDecorations />

      {/* Navbar di luar flex gap container */}
      <Navbar />

      {/* Layer 3: Main Sections Stack */}
      <div className="relative z-10 flex w-full flex-col items-center gap-20 md:gap-32">
        <ErcHero />
        <ErcDescription />
        <ErcPrizePool />
        <ErcTimeline />
        <ErcCountdown />
        <ErcFaq />
      </div>

      {/* Footer independen di paling bawah */}
      <Footer />
    </main>
  );
}
