"use client";

import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BccDecorations } from "@/app/_components/bcc/bcc-decorations";
import { BccPrizePool } from "@/app/_components/bcc/bcc-prize-pool";
import { BccTimeline } from "@/app/_components/bcc/bcc-timeline";
import { BccCountdown } from "@/app/_components/bcc/bcc-countdown";
import { BccFaq } from "@/app/_components/bcc/bcc-faq";
import { GradientDivider } from "@/app/_components/event-page/theme-divider";

const bccLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Event" },
  { href: "/erc", label: "ERC" },
  { href: "/bcc", label: "BCC" },
];

const competitionContacts = [
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
];

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

export default function BccPage() {
  return (
    <main className="bg-gradient-3 relative min-h-screen overflow-x-hidden text-white antialiased">
      {/* Layer 2: Decorative Overlay */}
      <BccDecorations />

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 mt-8 flex flex-col items-center px-6 pt-40 pb-12 text-center md:mt-20">
        {/* Left Ornament */}
        <div className="pointer-events-none absolute top-[20%] left-[-2%] z-0 opacity-80 select-none max-md:opacity-60 md:top-[25%] lg:top-[10%]">
          <Image
            src="/images/ornament1-left.png"
            alt=""
            width={600}
            height={600}
            className="w-[140px] object-contain sm:w-[250px] md:w-[300px] lg:w-[600px]"
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
        <h1 className="text-highlight-gradient-dark-bg text-shadow-links relative z-10 text-center text-[48px] leading-none font-bold not-italic sm:text-[64px] md:text-[70px] lg:text-[72px]">
          Business Case Competition
        </h1>

        <p className="text-infest-white text-md relative z-10 mt-6 max-w-6xl leading-relaxed sm:text-lg">
          Business Case Competition merupakan kompetisi yang menguji kemampuan{" "}
          <span className="text-golden-gradient">
            problem solving dan analytical thinking
          </span>{" "}
          dalam konteks bisnis. Business Case Competition akan terbagi menjadi 3
          babak, yakni <span className="italic">qualification round</span>,{" "}
          <span className="italic">preliminary stage</span>, dan{" "}
          <span className="italic">final round</span>.
        </p>

        <Link
          href="/register?comp=bcc"
          className="font-poppins bg-gradient-5 text-infest-white glow-box-golden mt-12 flex h-[64px] w-auto items-center justify-center gap-3 rounded-[60px] px-10 text-lg leading-[117%] font-bold tracking-wide transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-95 sm:text-xl md:h-[75px] md:gap-[12px] md:text-2xl"
        >
          <span className="text-shadow-links">Daftar Sekarang</span>
          <ArrowRight className="stroke-infest-white h-6 w-6 md:h-7 md:w-7" />
        </Link>
      </section>

      {/* Description of BCC */}
      <section className="relative z-10 mt-32 px-6 py-16">
        {/* Ornament 2 centered behind heading */}
        <div className="mx-auto max-w-4xl">
          <GradientDivider>What is BCC?</GradientDivider>
          <div
            className="mt-8 rounded-3xl p-[2px] shadow-[0_0_30px_rgba(147,0,156,0.25)]"
            style={{
              background: "linear-gradient(180deg, #FFEED2, #683A9C)",
            }}
          >
            <div className="rounded-3xl bg-[#020003] px-8 py-10 text-center shadow-[inset_2px_2px_8px_rgba(255,255,255,0.08)] sm:px-14 sm:py-14">
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                INFEST 2025, dengan tema{" "}
                <span className="text-golden-gradient">
                  &quot;Navigating the Future: Smart Investment in the Times of
                  Changes,&quot;
                </span>{" "}
                berfokus pada strategi investasi cerdas untuk menghadapi
                masa-masa penuh perubahan. Acara ini akan membekali peserta
                dengan pola pikir yang{" "}
                <span className="text-golden-gradient">
                  proaktif dan tangguh
                </span>
                , serta membahas pemanfaatan teknologi seperti AI dalam
                mengambil keputusan investasi di tengah dinamika pasar dan
                krisis ekonomi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prize Pool */}
      <BccPrizePool />

      {/* Timeline */}
      <BccTimeline />

      {/* Countdown */}
      <BccCountdown />

      {/* FAQ */}
      <BccFaq />

      {/* Footer */}
      <Footer competitionContacts={competitionContacts} />
    </main>
  );
}
