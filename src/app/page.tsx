"use client";

import Image from "next/image";

import { EventsCarousel } from "~/app/_components/landing/events-carousel";
import { FaqAccordion } from "~/components/faq-accordion";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { ScrollReveal } from "~/components/scroll-reveal";
import { GradientDivider } from "./_components/event-page/theme-divider";

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
    question: "Apa itu INFEST?",
    answer:
      "INFEST (Investment Festival) adalah acara tahunan yang diselenggarakan KSEP ITB untuk memberikan edukasi investasi dan pasar modal, dimeriahkan kompetisi ERC dan BCC serta talkshow/seminar utama.",
  },
  {
    question: "Kapan INFEST 2026 berlangsung?",
    answer:
      "Rangkaian acara berlangsung dari Juli hingga November 2026. Pantau linimasa dan media sosial resmi untuk tanggal pasti.",
  },
  {
    question: "Di mana lokasi acara diadakan?",
    answer:
      "Main event digelar di Aula CC Timur Institut Teknologi Bandung. Detail venue pre-event akan diumumkan lebih lanjut.",
  },
  {
    question: "Apakah acara ini gratis?",
    answer:
      "Informasi tiket dan biaya pendaftaran kompetisi akan diumumkan melalui guidebook dan media sosial resmi.",
  },
  {
    question: "Bagaimana cara menghubungi panitia?",
    answer:
      "Hubungi panitia melalui Instagram @infest.bdg atau kontak yang tertera di bagian footer website.",
  },
];

export default function Home() {
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
          <div className="pointer-events-none absolute top-[20%] left-0 z-0 opacity-80 select-none max-md:opacity-60 md:top-[25%] lg:top-[10%]">
            <Image
              src="/images/ornament1-left.png"
              alt=""
              width={600}
              height={600}
              className="w-[140px] object-contain sm:w-[250px] md:w-[300px] lg:w-[600px]"
            />
          </div>
          {/* Right Ornament */}
          <div className="pointer-events-none absolute top-[20%] right-0 z-0 opacity-80 select-none max-md:opacity-60 md:top-[25%] lg:top-[10%]">
            <Image
              src="/images/ornament1-right.png"
              alt=""
              width={600}
              height={600}
              className="w-[140px] object-contain sm:w-[250px] md:w-[300px] lg:w-[600px]"
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
            <GradientDivider>What is Infest?</GradientDivider>

            {/* Cards Grid */}
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <div className="bg-lighter-purple mx-auto flex min-h-[320px] w-full max-w-[808px] items-center justify-center rounded-[28.204px] px-6 py-10 text-center shadow-[inset_6px_6px_9.9px_rgba(255,255,255,0.33)] sm:px-[38px] sm:py-[70px]">
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
              <div className="bg-lighter-purple mx-auto flex min-h-[320px] w-full max-w-[808px] items-center justify-center rounded-[28.204px] px-6 py-10 text-center shadow-[inset_6px_6px_9.9px_rgba(255,255,255,0.33)] sm:px-[38px] sm:py-[70px]">
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
            <div className="relative mt-10 mb-10 md:mt-40 md:mb-28">
              {/* Horizontal Glowing Axis Line */}
              <div className="bg-light-purple absolute top-1/2 right-0 left-0 hidden h-1 -translate-y-1/2 rounded-full md:block" />

              {/* Navigation Arrows at line ends */}
              <button
                aria-label="Previous timeline"
                className="absolute top-1/2 -left-6 z-20 hidden -translate-y-1/2 text-white/70 transition duration-200 hover:scale-125 hover:text-white md:-left-12 md:block"
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
                className="absolute top-1/2 -right-6 z-20 hidden -translate-y-1/2 text-white/70 transition duration-200 hover:scale-125 hover:text-white md:-right-12 md:block"
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
              <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-6 md:gap-0">
                {timelineData.map((item, index) => {
                  const isTop = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className="relative flex flex-col items-center justify-center gap-2"
                    >
                      {/* Node Circle on Axis Line */}
                      <div className="bg-infest-pink z-10 h-5 w-5 rounded-full shadow-[0_0_15px_#EF35DB]" />

                      {/* Card (Top or Bottom) */}
                      <div
                        className={`bg-gradient-custom w-36 rounded-2xl p-4 text-center backdrop-blur-md sm:w-44 ${
                          isTop
                            ? "md:absolute md:bottom-10 md:mb-2"
                            : "md:absolute md:top-10 md:mt-2"
                        }`}
                      >
                        <h4 className="text-sm font-bold text-white sm:text-base">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-xs font-medium text-[#E5C7F7] sm:text-sm">
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
              <GradientDivider>Frequently Asked Questions</GradientDivider>
            </div>

            {/* Accordion List */}
            <FaqAccordion items={faqData} />
          </div>
        </section>
      </ScrollReveal>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
