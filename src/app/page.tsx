"use client";

import Image from "next/image";
import { useState } from "react";

import { EventsCarousel } from "~/app/_components/landing/events-carousel";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { ScrollReveal } from "~/components/scroll-reveal";

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

      <ScrollReveal>
        {/* Hero Section */}
        <section
          className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-20 text-center"
          id="home"
        >
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
          {/* Badge */}
          <div className="bg-light-purple mt-10 inline-flex h-[50px] w-[230px] items-center justify-center gap-2 rounded-[41px] text-sm font-bold tracking-wider text-white shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_10px_18.8px_#A68FC2] backdrop-blur-md">
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
              className="mt-10 h-auto w-full max-w-[280px] drop-shadow-[0_0_35px_rgba(240,74,201,0.5)] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[720px]"
              height={206}
              priority
              src="/images/logo-landing-page.png"
              width={900}
            />

            {/* Subtitle: investment festival */}
            <p className="text-infest-white/80 glow-text-1 mt-10 text-base font-medium tracking-[0.2em] italic drop-shadow-[0_0_35px_rgba(240,74,201,0.5)] sm:text-xl md:text-2xl">
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
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        {/* What is INFEST? Section */}
        <section className="relative z-10 px-6 py-20" id="about">
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
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-14 flex items-center justify-center">
              <div className="">
                <h2 className="text-5xl font-bold tracking-wide sm:text-[60px]">
                  <span className="glow-text-3 text-infest-white">
                    What is{" "}
                  </span>
                  <span className="text-highlight-gradient-dark-bg glow-text-1 font-extrabold">
                    INFEST?
                  </span>
                </h2>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <div className="bg-lighter-purple mx-auto flex h-[320px] w-full max-w-[808px] items-center justify-center rounded-[28.204px] py-[70px] pr-[37px] pl-[38px] text-center shadow-[inset_6px_6px_9.9px_rgba(255,255,255,0.33)]">
                <p className="text-base leading-relaxed font-medium text-white/90 sm:text-lg">
                  Acara tahunan yang diselenggarakan oleh{" "}
                  <strong className="text-accent-color font-bold">
                    KSEP ITB
                  </strong>{" "}
                  dengan tujuan memberikan edukasi mengenai investasi dan pasar
                  modal kepada mahasiswa dan masyarakat sekitar. Dimeriahkan
                  dengan lomba equity research competition{" "}
                  <strong className="text-accent-color font-bold">(ERC)</strong>
                  , business case competition{" "}
                  <strong className="text-accent-color font-bold">(BCC)</strong>
                  , dan{" "}
                  <strong className="text-accent-color font-bold">
                    talkshow/seminar
                  </strong>{" "}
                  yang menjadi acara utama.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-lighter-purple mx-auto flex h-[320px] w-full max-w-[808px] items-center justify-center rounded-[28.204px] py-[70px] pr-[37px] pl-[38px] text-center shadow-[inset_6px_6px_9.9px_rgba(255,255,255,0.33)]">
                <p className="text-base leading-relaxed font-medium text-white/90 sm:text-lg">
                  INFEST 2025, dengan tema{" "}
                  <strong className="text-accent-color font-bold">
                    &quot;Navigating the Future: Smart Investment in the Times
                    of Changes,&quot;
                  </strong>{" "}
                  berfokus pada strategi investasi cerdas untuk menghadapi
                  masa-masa penuh perubahan. Acara ini akan membekali peserta
                  dengan pola pikir yang{" "}
                  <strong className="text-accent-color font-bold">
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
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        {/* Our Events Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            {/* Capsule Pill Header */}
            <div className="mb-12 flex justify-center">
              <div className="bg-lighter-purple shadow-box-shadow-inset flex h-[90px] w-full max-w-[400px] items-center justify-center rounded-[100px]">
                <h2 className="text-3xl font-bold tracking-wide [filter:drop-shadow(0_4px_4px_rgba(0,0,0,0.25))] sm:text-[50px]">
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
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        {/* The Timeline Section */}
        <section className="relative z-10 px-6 py-24" id="timeline">
          {/* Ornament 3 Left */}
          <div className="pointer-events-none absolute top-[-60%] left-[-15%] z-0 opacity-80 select-none">
            <Image
              src="/images/ornament3-left.png"
              alt=""
              width={1000}
              height={1000}
              className="w-[300px] object-contain sm:w-[600px] md:w-[1000px]"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl">
            {/* Section Title */}
            <div className="mb-32 text-left">
              <h2 className="text-4xl font-bold sm:text-6xl">
                <span className="text-infest-white glow-text-3">The </span>
                <span className="text-highlight-gradient-dark-bg">
                  Timeline
                </span>
              </h2>
            </div>

            {/* Timeline Track with Staggered Cards */}
            <div className="relative mt-40 mb-28">
              {/* Horizontal Glowing Axis Line */}
              <div className="bg-light-purple absolute top-1/2 right-0 left-0 h-1 -translate-y-1/2 rounded-full" />

              {/* Navigation Arrows at line ends */}
              <button
                aria-label="Previous timeline"
                className="absolute top-1/2 -left-6 z-20 -translate-y-1/2 text-white/70 transition duration-200 hover:scale-125 hover:text-white md:-left-12"
                type="button"
              >
                <svg
                  className="h-8 w-8 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 19l-7-7 7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>

              <button
                aria-label="Next timeline"
                className="absolute top-1/2 -right-6 z-20 -translate-y-1/2 text-white/70 transition duration-200 hover:scale-125 hover:text-white md:-right-12"
                type="button"
              >
                <svg
                  className="h-8 w-8 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
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
                      <div className="bg-infest-pink z-10 h-5 w-5 rounded-full shadow-[0_0_15px_#EF35DB]" />

                      {/* Card (Top or Bottom) */}
                      <div
                        className={`bg-gradient-custom w-36 rounded-2xl p-4 text-center backdrop-blur-md sm:w-44 ${
                          isTop
                            ? "absolute bottom-10 mb-2"
                            : "absolute top-10 mt-2"
                        }`}
                      >
                        <h4 className="text-xs font-bold text-white sm:text-sm">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-[10px] font-medium text-[#E5C7F7] sm:text-xs">
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
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        {/* Frequently Asked Questions Section */}
        <section className="relative z-10 px-6 py-20" id="faq">
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
          <div className="relative z-10 mx-auto max-w-4xl">
            {/* Header Banner Bar */}
            <div className="mb-14 flex items-center justify-center">
              <h2 className="text-3xl font-bold sm:text-5xl">
                <span className="text-infest-white glow-text-3">
                  Frequently Asked{" "}
                </span>
                <span className="text-highlight-gradient-dark-bg">
                  Questions
                </span>
              </h2>
            </div>

            {/* Accordion List */}
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
                        className={`text-infest-white ml-4 flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          className="h-6 w-6"
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
      </ScrollReveal>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
