"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { GradientBorderCard } from "@/components/gradient-border-card";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";
import { GradientDivider } from "./_components/event-page/theme-divider";

const EventsCarousel = dynamic(() =>
  import("./_components/landing/events-carousel").then((m) => m.EventsCarousel),
);
const TimelineCarousel = dynamic(() =>
  import("./_components/landing/timeline-carousel").then(
    (m) => m.TimelineCarousel,
  ),
);
const FaqAccordion = dynamic(() =>
  import("../components/faq-accordion").then((m) => m.FaqAccordion),
);

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
          <div className="animate-float pointer-events-none absolute top-[30%] left-[-2%] z-0 opacity-80 select-none max-md:opacity-60 md:top-[25%] lg:top-[10%]">
            <Image
              src="/images/ornament1-left.png"
              alt=""
              width={600}
              height={600}
              className="w-[140px] object-contain sm:w-[250px] md:w-[300px] lg:w-[600px]"
            />
          </div>
          {/* Right Ornament */}
          <div className="animate-float pointer-events-none absolute top-[30%] right-[-2%] z-0 opacity-80 select-none [animation-delay:1.5s] max-md:opacity-60 md:top-[25%] lg:top-[10%]">
            <Image
              src="/images/ornament1-right.png"
              alt=""
              width={600}
              height={600}
              className="w-[140px] object-contain sm:w-[250px] md:w-[300px] lg:w-[600px]"
            />
          </div>
          {/* Badge */}
          <div className="bg-light-purple mt-10 inline-flex h-[36px] w-[170px] items-center justify-center gap-1.5 rounded-[30px] text-xs font-bold tracking-wider text-white shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_10px_18.8px_#A68FC2] backdrop-blur-md transition-all duration-300 sm:h-[50px] sm:w-[230px] sm:gap-2 sm:rounded-[41px] sm:text-sm">
            <Image
              alt="KSEP ITB"
              className="h-5 w-5 object-contain sm:h-8 sm:w-8"
              height={40}
              src="/images/logoksep-putih.png"
              width={80}
            />
            <span>KSEP ITB Presents</span>
          </div>

          {/* Big Styled Title Logo: INFEST 2026 */}
          <div className="animate-float-medium flex flex-col items-center justify-center">
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
            <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-8">
              {/* Card 1 */}
              <GradientBorderCard
                className="mx-auto w-full max-w-[808px]"
                innerClassName="flex min-h-[150px] items-center justify-center px-5 py-5 text-center sm:min-h-[220px] sm:px-6 sm:py-8"
              >
                <p className="text-infest-white text-xs leading-relaxed font-medium sm:text-sm">
                  Acara tahunan yang diselenggarakan oleh{" "}
                  <strong className="text-golden-gradient font-bold">
                    KSEP ITB
                  </strong>{" "}
                  dengan tujuan memberikan edukasi mengenai investasi dan pasar
                  modal kepada mahasiswa dan masyarakat sekitar. Dimeriahkan
                  dengan lomba equity research competition{" "}
                  <strong className="text-golden-gradient font-bold">
                    (ERC)
                  </strong>
                  , business case competition{" "}
                  <strong className="text-golden-gradient font-bold">
                    (BCC)
                  </strong>
                  , dan{" "}
                  <strong className="text-golden-gradient font-bold">
                    talkshow/seminar
                  </strong>{" "}
                  yang menjadi acara utama.
                </p>
              </GradientBorderCard>

              {/* Card 2 */}
              <GradientBorderCard
                className="mx-auto w-full max-w-[808px]"
                innerClassName="flex min-h-[150px] items-center justify-center px-4 py-5 text-center sm:min-h-[220px] sm:px-6 sm:py-8"
              >
                <p className="text-infest-white text-xs leading-relaxed font-medium sm:text-sm">
                  INFEST 2025, dengan tema{" "}
                  <span className="text-golden-gradient">
                    &quot;Navigating the Future: Smart Investment in the Times
                    of Changes&quot;
                  </span>
                  , berfokus pada strategi investasi cerdas untuk menghadapi
                  masa-masa penuh perubahan. Acara ini akan membekali peserta
                  dengan pola pikir yang proaktif dan tangguh, serta membahas
                  pemanfaatan teknologi seperti AI dalam mengambil keputusan
                  investasi di tengah dinamika pasar dan krisis ekonomi.
                </p>
              </GradientBorderCard>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        {/* Our Events Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            {/* Capsule Pill Header */}
            <div className="mb-0 flex justify-center lg:mb-8">
              <div className="bg-lighter-purple shadow-box-shadow-inset flex h-[70px] w-full max-w-[250px] items-center justify-center rounded-[100px] lg:h-[90px] lg:max-w-[400px]">
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
        <TimelineCarousel items={timelineData} />
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        {/* Frequently Asked Questions Section */}
        <section className="relative z-10 px-6 py-20" id="faq">
          {/* Ornament 3 Right */}
          <div className="pointer-events-none absolute top-[0%] right-[-20%] z-0 opacity-80 select-none md:top-[-90%]">
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
