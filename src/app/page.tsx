"use client";

import Image from "next/image";
import { useState } from "react";

import { EventsCarousel } from "~/app/_components/landing/events-carousel";
import { Navbar } from "~/app/_components/landing/navbar";

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
    <main className="relative min-h-screen overflow-x-hidden bg-[#07010F] font-sans text-white antialiased">
      {/* Background Vector Ornaments & Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Glow ambient spots */}
        <div className="absolute top-[-10%] left-1/2 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#530074]/35 blur-[140px]" />
        <div className="absolute top-[30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#8E00A6]/20 blur-[150px]" />
        <div className="absolute top-[65%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#530074]/30 blur-[160px]" />

        {/* Vector SVG Ornaments from public/images */}
        <Image
          alt=""
          className="absolute top-0 right-[-100px] w-[650px] opacity-40 mix-blend-screen md:w-[900px]"
          height={800}
          priority
          src="/images/ornament1.svg"
          width={800}
        />
        <Image
          alt=""
          className="absolute top-[1100px] left-[-100px] w-[550px] opacity-35 mix-blend-screen md:w-[800px]"
          height={700}
          src="/images/ornament2.svg"
          width={700}
        />
        <Image
          alt=""
          className="absolute top-[2100px] right-[-100px] w-[600px] opacity-35 mix-blend-screen md:w-[850px]"
          height={700}
          src="/images/ornament3.svg"
          width={700}
        />

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
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#F04AC9]/50 bg-[#1D0333]/80 px-5 py-2 text-xs font-bold tracking-wider text-white shadow-[0_0_20px_rgba(240,74,201,0.3)] backdrop-blur-md">
          <span className="text-[#F04AC9]">✨</span>
          <span>KSEP ITB Presents</span>
        </div>

        {/* Big Styled Title Logo: INFEST 2026 */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            {/* INFEST Text */}
            <h1 className="bg-gradient-to-r from-[#F75AE0] via-[#EF35DB] to-[#A000C8] bg-clip-text text-7xl font-black tracking-tight text-transparent drop-shadow-[0_0_35px_rgba(240,74,201,0.5)] sm:text-9xl md:text-[140px] lg:text-[170px]">
              INFEST
            </h1>

            {/* Stacked 2026 with chevron arrows */}
            <div className="flex flex-col items-start leading-none font-black text-white">
              <div className="flex items-center gap-1 text-2xl text-[#F04AC9] sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="text-[#F04AC9]">›››</span>
                <span className="bg-gradient-to-r from-[#EF35DB] to-[#A000C8] bg-clip-text text-transparent">
                  20
                </span>
              </div>
              <span className="text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
                26
              </span>
            </div>
          </div>

          {/* Subtitle: investment festival */}
          <p className="mt-3 text-base tracking-[0.35em] text-[#E5C7F7] italic sm:text-xl md:text-2xl">
            i n v e s t m e n t &nbsp; f e s t i v a l
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
          {/* Glowing Header Banner Bar */}
          <div className="mb-14 flex items-center justify-center">
            <div className="w-full rounded-full border border-[#F04AC9]/30 bg-gradient-to-r from-transparent via-[#4B0068]/60 to-transparent py-4 text-center shadow-[0_0_40px_rgba(240,74,201,0.2)] backdrop-blur-md">
              <h2 className="text-3xl font-black sm:text-5xl">
                <span className="text-stroke-white tracking-wide text-white">
                  What is{" "}
                </span>
                <span className="bg-gradient-to-r from-[#F75AE0] to-[#EF35DB] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(240,74,201,0.5)]">
                  INFEST?
                </span>
              </h2>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-3xl border border-[#F04AC9]/30 bg-[#160228]/75 p-8 shadow-[0_0_30px_rgba(124,29,185,0.2)] backdrop-blur-md transition-all duration-300 hover:border-[#F04AC9]/60 hover:shadow-[0_0_40px_rgba(240,74,201,0.3)]">
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                Acara tahunan yang diselenggarakan oleh{" "}
                <strong className="font-bold text-[#FACC15]">KSEP ITB</strong>{" "}
                dengan tujuan memberikan edukasi mengenai investasi dan pasar
                modal kepada mahasiswa dan masyarakat sekitar. Dimeriahkan
                dengan lomba equity research competition{" "}
                <strong className="font-bold text-[#FACC15]">(ERC)</strong>,
                business case competition{" "}
                <strong className="font-bold text-[#FACC15]">(BCC)</strong>, dan{" "}
                <strong className="font-bold text-[#FACC15]">
                  talkshow/seminar
                </strong>{" "}
                yang menjadi acara utama.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-[#F04AC9]/30 bg-[#160228]/75 p-8 shadow-[0_0_30px_rgba(124,29,185,0.2)] backdrop-blur-md transition-all duration-300 hover:border-[#F04AC9]/60 hover:shadow-[0_0_40px_rgba(240,74,201,0.3)]">
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                INFEST 2025, dengan tema{" "}
                <strong className="font-bold text-[#FACC15]">
                  &quot;Navigating the Future: Smart Investment in the Times of
                  Changes,&quot;
                </strong>{" "}
                berfokus pada strategi investasi cerdas untuk menghadapi
                masa-masa penuh perubahan. Acara ini akan membekali peserta
                dengan pola pikir yang{" "}
                <strong className="font-bold text-[#FACC15]">
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
            <div className="rounded-full border border-[#F04AC9]/50 bg-gradient-to-r from-[#4A0068] via-[#7B009A] to-[#4A0068] px-10 py-3 shadow-[0_0_30px_rgba(240,74,201,0.4)] backdrop-blur-md">
              <h2 className="text-3xl font-black tracking-wide sm:text-4xl">
                <span className="text-stroke-white text-white">Our </span>
                <span className="bg-gradient-to-r from-[#F75AE0] to-[#EF35DB] bg-clip-text text-transparent">
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
      <footer className="relative z-10 border-t border-white/10 px-6 pt-16 pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Social Media Column */}
            <div>
              <h3 className="text-2xl font-black tracking-wide sm:text-3xl">
                <span className="text-stroke-white text-white">Social </span>
                <span className="bg-gradient-to-r from-[#F75AE0] to-[#EF35DB] bg-clip-text text-transparent">
                  Media
                </span>
              </h3>
              <p className="mt-4 max-w-sm text-sm text-[#E5C7F7]">
                Follow us on social media to find out the latest updates on our
                event
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-4">
                {/* LinkedIn */}
                <a
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-[#F04AC9] hover:bg-[#F04AC9]/20"
                  href="#"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-[#F04AC9] hover:bg-[#F04AC9]/20"
                  href="#"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-[#F04AC9] hover:bg-[#F04AC9]/20"
                  href="#"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Information Column */}
            <div>
              <h3 className="text-2xl font-black tracking-wide sm:text-3xl">
                <span className="text-stroke-white text-white">Contact </span>
                <span className="bg-gradient-to-r from-[#F75AE0] to-[#EF35DB] bg-clip-text text-transparent">
                  Information
                </span>
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-8 text-xs text-white/90 sm:text-sm">
                {/* Event Contacts */}
                <div>
                  <h4 className="mb-4 font-bold text-white">Event</h4>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="space-y-1">
                        <p className="font-semibold text-white">
                          Muhammad Orkhan
                        </p>
                        <p className="flex items-center gap-1.5 text-white/70">
                          <span>📞</span> 08119900125
                        </p>
                        <p className="flex items-center gap-1.5 text-white/70">
                          <span>💬</span> orkhan12345678
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competition Contacts */}
                <div>
                  <h4 className="mb-4 font-bold text-white">Competition</h4>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="space-y-1">
                        <p className="font-semibold text-white">
                          Muhammad Orkhan
                        </p>
                        <p className="flex items-center gap-1.5 text-white/70">
                          <span>📞</span> 08119900125
                        </p>
                        <p className="flex items-center gap-1.5 text-white/70">
                          <span>💬</span> orkhan12345678
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/60">
            © INFEST ITB 2026
          </div>
        </div>
      </footer>
    </main>
  );
}
