"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";
import { BccDecorations } from "~/app/_components/bcc/bcc-decorations";
import { BccPrizePool } from "~/app/_components/bcc/bcc-prize-pool";
import { BccTimeline } from "~/app/_components/bcc/bcc-timeline";
import { BccCountdown } from "~/app/_components/bcc/bcc-countdown";

const bccLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Event" },
  { href: "/erc", label: "ERC" },
  { href: "/bcc", label: "BCC" },
];

const faqData = [
  {
    question: "Orkhan",
    answer: "Muhammad Orkhan adalah Project Manager Website INFEST 2026.",
  },
  {
    question: "When yh?",
    answer:
      "Rangkaian acara INFEST 2026 akan berlangsung dari bulan Juli hingga November 2026. Pantau terus linimasa dan media sosial resmi kami untuk tanggal pendaftaran pasti!",
  },
  {
    question: "Bang orkhan apa rahasianya?",
    answer:
      "Rahasianya adalah kerja keras, dedikasi tanpa henti, riset mendalam, serta dukungan penuh dari seluruh panitia KSEP ITB dalam menyajikan festival investasi terbaik di Indonesia.",
  },
  {
    question: "Bang Orkhan bagi linkedin nya dong",
    answer:
      "Silakan terhubung secara profesional melalui LinkedIn Muhammad Orkhan untuk berdiskusi seputar finansial, pasar modal, dan kolaborasi event!",
  },
  {
    question: "Bang orkhan jomblo ga?",
    answer:
      "Pertanyaan menarik! Fokus utamanya saat ini adalah menyukseskan INFEST 2026. Temui Bang Orkhan secara langsung pada sesi seminar puncak 😉",
  },
];

const competitionContacts = [
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
];

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mb-12 flex items-center justify-center">
      {/* Glow bar behind */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-12 w-[200%] min-w-[800px] rounded-full opacity-100 sm:h-14 md:h-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(115,115,115,0) 0%, rgba(255,184,0,0.30) 15.87%, #E306D9 50%, rgba(255,184,0,0.30) 85.09%, rgba(115,115,115,0) 100%)",
          }}
        />
      </div>
      <h2
        className="relative z-10 text-center text-[40px] leading-none font-semibold text-white italic sm:text-[50px] md:text-[60px]"
        style={{
          textShadow:
            "0 0 8px rgba(0, 0, 0, 0.25), 0 0 32px rgba(255, 254, 255, 0.40), 0 0 40px rgba(255, 254, 255, 0.25)",
          letterSpacing: "-1.2px",
        }}
      >
        {children}
      </h2>
    </div>
  );
}

export default function BccPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-gradient-3 relative min-h-screen overflow-x-hidden text-white antialiased">
      {/* Layer 2: Decorative Overlay */}
      <BccDecorations />

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-40 pb-12 text-center">
        {/* Left Ornament */}
        <div className="pointer-events-none absolute top-[20%] left-0 z-0 opacity-80 select-none md:top-[25%] lg:top-[10%]">
          <Image
            src="/images/ornament1-left.png"
            alt=""
            width={600}
            height={600}
            className="w-[200px] object-contain sm:w-[250px] md:w-[300px] lg:w-[600px]"
          />
        </div>
        {/* Right Ornament */}
        <div className="pointer-events-none absolute top-[20%] right-0 z-0 opacity-80 select-none md:top-[25%] lg:top-[10%]">
          <Image
            src="/images/ornament1-right.png"
            alt=""
            width={600}
            height={600}
            className="w-[200px] object-contain sm:w-[250px] md:w-[300px] lg:w-[600px]"
          />
        </div>
        <h1 className="text-highlight-gradient-dark-bg relative z-10 mt-5 text-center text-[48px] leading-none font-bold not-italic sm:text-[64px] md:text-[80px] lg:text-[90px]">
          Business Case Competition
        </h1>

        <p className="text-infest-white relative z-10 mt-6 max-w-3xl text-base leading-relaxed sm:text-lg">
          Business Case Competition merupakan kompetisi yang menguji kemampuan{" "}
          <span className="bg-gradient-to-r from-[#FF5AF7] to-[#FFB800] bg-clip-text font-bold text-transparent">
            problem solving dan analytical thinking
          </span>{" "}
          dalam konteks bisnis. Business Case Competition akan terbagi menjadi 3
          babak, yakni <span className="italic">qualification round</span>,{" "}
          <span className="italic">preliminary stage</span>, dan{" "}
          <span className="italic">final round</span>.
        </p>

        <Link
          className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#380356] via-[#E306D9] to-[#FFB800] px-8 py-3 text-lg font-bold text-white shadow-[0_0_25px_rgba(227,6,217,0.4)] transition hover:brightness-110"
          href="#"
        >
          Daftar Sekarang
          <span className="text-xl">→</span>
        </Link>
      </section>

      {/* Description of BCC */}
      <section className="relative z-10 px-6 py-16">
        {/* Ornament 2 centered behind heading */}
        <div className="pointer-events-none absolute top-[-18%] left-[50%] z-0 w-full -translate-x-1/2 scale-125 opacity-85 select-none">
          <Image
            src="/images/ornament2.png"
            alt=""
            width={1920}
            height={600}
            className="w-full object-contain"
          />
        </div>
        <div className="mx-auto max-w-4xl">
          <SectionHeader>Description of BCC</SectionHeader>
          <div
            className="mt-8 rounded-3xl p-[2px] shadow-[0_0_30px_rgba(147,0,156,0.25)]"
            style={{
              background: "linear-gradient(180deg, #FFEED2, #683A9C)",
            }}
          >
            <div className="rounded-3xl bg-[#020003] px-8 py-10 text-center shadow-[inset_2px_2px_8px_rgba(255,255,255,0.08)] sm:px-14 sm:py-14">
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                INFEST 2025, dengan tema{" "}
                <span className="bg-gradient-to-r from-[#FF5AF7] to-[#FFB800] bg-clip-text font-bold text-transparent">
                  &quot;Navigating the Future: Smart Investment in the Times of
                  Changes,&quot;
                </span>{" "}
                berfokus pada strategi investasi cerdas untuk menghadapi
                masa-masa penuh perubahan. Acara ini akan membekali peserta
                dengan pola pikir yang{" "}
                <span className="bg-gradient-to-r from-[#FF5AF7] to-[#FFB800] bg-clip-text font-bold text-transparent">
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
      <section className="relative z-10 px-6 py-16" id="faq">
        {/* Ornament 3 Right */}
        <div className="pointer-events-none absolute top-[-90%] right-[-20%] z-0 opacity-80 select-none">
          <Image
            src="/images/ornament3-right.png"
            alt=""
            width={1000}
            height={1000}
            className="w-[300px] object-contain sm:w-[600px] md:w-[1000px]"
          />
        </div>
        <div className="mx-auto max-w-4xl">
          <SectionHeader>Frequently Asked Questions</SectionHeader>
          <div className="flex flex-col gap-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden backdrop-blur-md transition-all duration-300"
                  style={{
                    borderRadius: isOpen ? "20px" : "100px",
                    background: "#6B0078",
                    boxShadow:
                      "inset 5px 6px 4.5px 0px rgba(255, 254, 255, 0.25)",
                  }}
                >
                  <button
                    className="flex w-full cursor-pointer items-center justify-between px-8 py-4 text-left text-base font-medium text-white sm:text-lg"
                    onClick={() => toggleFaq(index)}
                    type="button"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`text-infest-white ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                        />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-infest-white/10 border-t px-8 py-5 text-sm leading-relaxed text-[#E5C7F7] sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer competitionContacts={competitionContacts} />
    </main>
  );
}
