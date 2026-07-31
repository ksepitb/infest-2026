"use client";

import Image from "next/image";
import { useState } from "react";

import { EventsCarousel } from "~/app/_components/landing/events-carousel";
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

const timelineData = [
  { title: "BCC Registration", date: "5–13 Juli 2025" },
  { title: "BCC Registration", date: "5–13 Juli 2025" },
  { title: "BCC Registration", date: "5–13 Juli 2025" },
  { title: "BCC Registration", date: "5–13 Juli 2025" },
  { title: "BCC Registration", date: "5–13 Juli 2025" },
  { title: "BCC Registration", date: "5–13 Juli 2025" },
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

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-gradient-1 relative min-h-screen overflow-x-hidden text-white antialiased">
      {/* Background Vector Ornaments & Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Glow ambient spots */}
        <div className="absolute top-[-10%] left-1/2 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#530074]/35 blur-[140px]" />
        <div className="absolute top-[30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#8E00A6]/20 blur-[150px]" />
        <div className="absolute top-[65%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#530074]/30 blur-[160px]" />

       

        {/* Dotted matrix SVG ornament */}
        <Image
          alt=""
          className="absolute bottom-[450px] left-[-40px] w-[300px] opacity-25 mix-blend-screen md:w-[420px]"
          height={500}
          src="/images/dotted1.svg"
          width={500}
        />
        <Image
          alt=""
          className="absolute right-[-40px] bottom-20 w-[300px] opacity-25 mix-blend-screen md:w-[420px]"
          height={500}
          src="/images/dotted1.svg"
          width={500}
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-20 text-center"
        id="home"
      >
        {/* Badge */}
        <div className="inline-flex w-[230px] h-[50px] items-center justify-center gap-2 rounded-[41px] bg-light-purple text-sm font-bold tracking-wider text-white shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_10px_18.8px_#A68FC2] backdrop-blur-md mt-10">
          <Image
            alt="KSEP ITB"
            className="h-8 w-8 object-contain"
            height={40}
            src="/images/logoksep-putih.png"
            width={80}
          />
          <span>KSEP ITB Presents</span>
        </div>

        {/* Big Styled Title Logo: INFEST 2026 */}
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="INFEST 2026 Logo"
            className="h-auto w-full max-w-[280px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[720px] mt-10 drop-shadow-[0_0_35px_rgba(240,74,201,0.5)]"
            height={206}
            priority
            src="/images/logo-landing-page.png"
            width={900}
          />

          {/* Subtitle: investment festival */}
          <p className="mt-10 text-base tracking-[0.2em] font-medium text-infest-white/80 italic sm:text-xl md:text-2xl glow-text-1 drop-shadow-[0_0_35px_rgba(240,74,201,0.5)]">
            I n v e s t m e n t &nbsp; F e s t i v a l
          </p>
        </div>

        {/* Sponsored By */}
        <div className="mt-28 w-full max-w-5xl">
          <p className="mb-8 text-xs font-semibold tracking-widest text-white/70 uppercase">
            Sponsored by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="text-2xl font-black tracking-widest text-white/80 transition-opacity hover:opacity-100 sm:text-3xl"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 30%, transparent 31%)",
                  backgroundSize: "6px 6px",
                  WebkitBackgroundClip: "text",
                }}
              >
                LOGO
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What is INFEST? Section */}
      <section className="relative z-10 px-6 py-20" id="about">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex items-center justify-center">
            <div className="">
              <h2 className="text-5xl sm:text-[60px] font-bold tracking-wide ">
                <span className="glow-text-3 text-infest-white">
                  What is{" "}
                </span>
                <span className="text-highlight-gradient-dark-bg font-extrabold glow-text-1">
                  INFEST?
                </span>
              </h2>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <div className="mx-auto flex h-[320px] w-full max-w-[808px] items-center justify-center rounded-[28.204px] bg-lighter-purple py-[70px] pr-[37px] pl-[38px] shadow-[inset_6px_6px_9.9px_rgba(255,255,255,0.33)] text-center">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-white/90">
                Acara tahunan yang diselenggarakan oleh{" "}
                <strong className="font-bold text-accent-color">KSEP ITB</strong>{" "}
                dengan tujuan memberikan edukasi mengenai investasi dan pasar
                modal kepada mahasiswa dan masyarakat sekitar. Dimeriahkan
                dengan lomba equity research competition{" "}
                <strong className="font-bold text-accent-color">(ERC)</strong>,
                business case competition{" "}
                <strong className="font-bold text-accent-color">(BCC)</strong>, dan{" "}
                <strong className="font-bold text-accent-color">
                  talkshow/seminar
                </strong>{" "}
                yang menjadi acara utama.
              </p>
            </div>

            {/* Card 2 */}
            <div className="mx-auto flex h-[320px] w-full max-w-[808px] items-center justify-center rounded-[28.204px] bg-lighter-purple py-[70px] pr-[37px] pl-[38px] shadow-[inset_6px_6px_9.9px_rgba(255,255,255,0.33)] text-center">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-white/90 ">
                INFEST 2025, dengan tema{" "}
                <strong className="font-bold text-accent-color">
                  &quot;Navigating the Future: Smart Investment in the Times of
                  Changes,&quot;
                </strong>{" "}
                berfokus pada strategi investasi cerdas untuk menghadapi
                masa-masa penuh perubahan. Acara ini akan membekali peserta
                dengan pola pikir yang{" "}
                <strong className="font-bold text-accent-color">
                  proaktif dan tangguh
                </strong>
                , serta membahas pemanfaatan teknologi seperti AI dalam
                mengambil keputusan investasi di tengah dinamika pasar dan
                krisis ekonomi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Events Section */}
      <section className="relative z-10 px-6 py-20" id="events">
        <div className="mx-auto max-w-6xl">
          {/* Capsule Pill Header */}
          <div className="mb-12 flex justify-center">
            <div className="flex h-[90px] w-full max-w-[400px] items-center justify-center rounded-[100px] bg-lighter-purple shadow-[inset_0_10px_18.8px_#A68FC2]">
              <h2 className="text-3xl sm:text-[50px] font-bold tracking-wide [filter:drop-shadow(0_4px_4px_rgba(0,0,0,0.25))]">
                <span className="text-infest-white">Our </span>
                <span className="text-highlight-gradient-dark-bg">
                  Events
                </span>
              </h2>
            </div>
          </div>

          <EventsCarousel />
        </div>
      </section>

      {/* The Timeline Section */}
      <section className="relative z-10 px-6 py-24" id="timeline">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black sm:text-6xl">
              <span className="text-stroke-white text-white">The </span>
              <span className="bg-gradient-to-r from-[#F75AE0] via-[#EF35DB] to-[#A000C8] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(240,74,201,0.5)]">
                Timeline
              </span>
            </h2>
          </div>

          {/* Timeline Track with Staggered Cards */}
          <div className="relative mx-auto my-12 max-w-5xl">
            {/* Horizontal Glowing Axis Line */}
            <div className="absolute top-1/2 right-0 left-0 h-1 -translate-y-1/2 bg-gradient-to-r from-[#F04AC9]/20 via-[#F04AC9] to-[#F04AC9]/20 shadow-[0_0_15px_#F04AC9]" />

            {/* Navigation Arrows at line ends */}
            <button
              aria-label="Previous timeline"
              className="absolute top-1/2 -left-6 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#F04AC9]/40 bg-[#160228] text-white shadow-[0_0_15px_rgba(240,74,201,0.3)] transition hover:scale-110 md:-left-12"
              type="button"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                />
              </svg>
            </button>

            <button
              aria-label="Next timeline"
              className="absolute top-1/2 -right-6 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#F04AC9]/40 bg-[#160228] text-white shadow-[0_0_15px_rgba(240,74,201,0.3)] transition hover:scale-110 md:-right-12"
              type="button"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                />
              </svg>
            </button>

            {/* Nodes and Cards Grid */}
            <div className="grid grid-cols-2 gap-y-16 md:grid-cols-6 md:gap-y-0">
              {timelineData.map((item, index) => {
                const isTop = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center justify-center"
                  >
                    {/* Node Circle on Axis Line */}
                    <div className="z-10 h-6 w-6 rounded-full border-2 border-white bg-[#EF35DB] shadow-[0_0_15px_#EF35DB]" />

                    {/* Card (Top or Bottom) */}
                    <div
                      className={`w-36 rounded-2xl border border-[#F04AC9]/40 bg-[#1A0330]/90 p-3 text-center shadow-[0_0_20px_rgba(124,29,185,0.25)] backdrop-blur-md sm:w-44 ${
                        isTop
                          ? "absolute bottom-10 mb-2"
                          : "absolute top-10 mt-2"
                      }`}
                    >
                      <h4 className="text-xs font-black text-white sm:text-sm">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[10px] font-medium text-[#E5C7F7] sm:text-xs">
                        {item.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="relative z-10 px-6 py-20" id="faq">
        <div className="mx-auto max-w-4xl">
          {/* Header Banner Bar */}
          <div className="mb-14 flex items-center justify-center">
            <div className="w-full rounded-full border border-[#F04AC9]/30 bg-gradient-to-r from-transparent via-[#4B0068]/60 to-transparent py-4 text-center shadow-[0_0_40px_rgba(240,74,201,0.2)] backdrop-blur-md">
              <h2 className="text-3xl font-black sm:text-5xl">
                <span className="text-stroke-white text-white">
                  Frequently Asked{" "}
                </span>
                <span className="bg-gradient-to-r from-[#F75AE0] to-[#EF35DB] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-full border border-[#F04AC9]/40 bg-[#1D0333]/90 shadow-[0_0_20px_rgba(124,29,185,0.2)] backdrop-blur-md transition-all duration-300 hover:border-[#F04AC9]/70"
                  style={{
                    borderRadius: isOpen ? "24px" : "9999px",
                  }}
                >
                  <button
                    className="flex w-full items-center justify-between px-8 py-4 text-left text-base font-bold text-white sm:text-lg"
                    onClick={() => toggleFaq(index)}
                    type="button"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F04AC9] transition-transform duration-300 ${
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
                    <div className="border-t border-[#F04AC9]/20 px-8 py-5 text-sm leading-relaxed text-[#E5C7F7] sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
