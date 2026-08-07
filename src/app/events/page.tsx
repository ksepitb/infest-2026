import type { Metadata } from "next";
import Image from "next/image";

import { HeaderLogo } from "~/app/_components/event-page/logo-infest";
import { DayCard, Highlight } from "~/app/_components/event-page/day-card";
import { HighlightsCarousel } from "~/app/_components/event-page/highlight";
import { LocationPill } from "~/app/_components/event-page/location-pill";
import { SectionBadge } from "~/app/_components/event-page/section-badge";
import { descriptionBoxStyle } from "~/app/_components/event-page/styles";
import { GradientDivider } from "~/app/_components/event-page/theme-divider";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { ScrollReveal } from "~/components/scroll-reveal";
import { EventsCarousel } from "../_components/landing/events-carousel";

export const metadata: Metadata = {
  title: "Events | INFEST 2026",
  description:
    "Jelajahi rangkaian Pre-Event dan Main Event INFEST 2026 — festival investasi terbesar dari KSEP ITB.",
  openGraph: {
    title: "Events | INFEST 2026",
    description:
      "Pre-Event dan Main Event INFEST 2026 — workshop, trading challenge, dan talkshow inspiratif.",
    siteName: "INFEST 2026",
  },
};

const eventLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Event" },
  { href: "/erc", label: "ERC" },
  { href: "/bcc", label: "BCC" },
];

function ThemeDescription() {
  return (
    <>
      INFEST 2025, dengan tema{" "}
      <Highlight>
        &ldquo;Navigating the Future: Smart Investment in the Times of
        Changes,&rdquo;
      </Highlight>{" "}
      berfokus pada strategi investasi cerdas untuk menghadapi masa-masa penuh
      perubahan. Acara ini akan membekali peserta dengan pola pikir yang
      proaktif dan tangguh, serta membahas pemanfaatan teknologi seperti AI
      dalam mengambil keputusan investasi di tengah dinamika pasar dan krisis
      ekonomi.
    </>
  );
}

function ThemeDescriptionBox() {
  return (
    <div className="flex w-full justify-center px-6">
      <div
        style={descriptionBoxStyle}
        className="w-full max-w-4xl px-8 py-8 text-center sm:px-12 sm:py-10"
      >
        <p
          style={{ textShadow: "0 4px 9.3px rgba(0,0,0,.25)" }}
          className="font-poppins text-sm leading-relaxed font-semibold text-white sm:text-base lg:text-lg"
        >
          <ThemeDescription />
        </p>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <main className="bg-gradient-to-br from-[#6B0078] to-[#000000] relative min-h-screen overflow-x-hidden pb-24 text-white antialiased">
      {/* Background Vector Ornaments & Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Glow ambient spots */}
        <div className="absolute top-[-10%] left-1/2 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#530074]/35 blur-[140px]" />
        <div className="absolute top-[30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#8E00A6]/20 blur-[150px]" />
        <div className="absolute top-[65%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#530074]/30 blur-[160px]" />

        <Image
          alt=""
          aria-hidden="true"
          className="absolute bottom-[450px] left-[-40px] w-[300px] opacity-25 mix-blend-screen md:w-[420px]"
          height={500}
          src="/images/dotted1.svg"
          width={500}
        />
        <Image
          alt=""
          aria-hidden="true"
          className="absolute right-[-40px] bottom-20 w-[300px] opacity-25 mix-blend-screen md:w-[420px]"
          height={500}
          src="/images/dotted1.svg"
          width={500}
        />
      </div>

      <Navbar
        activeHref="/events"
        links={eventLinks}
        registerHref="/register"
      />
      <div className="pointer-events-none absolute inset-0 top-[0] z-0 overflow-hidden">
        {/* Left Ornament */}
        <div className="absolute right-[-5%] h-auto w-[1600px] opacity-80 select-none">
          <Image
            alt=""
            height={1600}
            src="/images/event-ornament-top.png"
            width={1600}
          />
        </div>
      </div>
      {/* Hero */}
      <ScrollReveal>
        <section className="relative z-10 mx-auto mt-16 flex max-w-7xl flex-col items-center px-6 pt-32 text-center">
          <HeaderLogo />
        </section>
      </ScrollReveal>


      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Left Ornament */}
        <div className="absolute left-[0] top-[10%] h-auto w-[1600px] opacity-80 select-none">
          <Image
            alt=""
            height={1200}
            src="/images/event-ornament-mid-top.png"
            width={1200}
          />
        </div>
      </div>


      {/* Pre-Events */}
      <ScrollReveal>
        <section className="relative z-10 mx-auto mt-32 flex max-w-5xl flex-col items-center gap-24 px-6">
          <SectionBadge>Pre-Events</SectionBadge>

          <DayCard
            dayLabel="DAY 00"
            title="Workshop"
            description={<ThemeDescription />}
            imageSrc="/images/speakers/speaker.png"
            imageAlt="Pembicara Workshop"
            imagePosition="right"
            boxed
            priority
          />
      
          <DayCard
            dayLabel="DAY 00"
            title="The 5-Day Trading Challenge"
            description={<ThemeDescription />}
            imageSrc="/images/speakers/speaker.png"
            imageAlt="Pembicara Trading Challenge"
            imagePosition="left"
            boxed
          />
        </section>
      </ScrollReveal>

      {/* Main Event */}
      <ScrollReveal>
        <section className="relative z-10 mx-auto mt-32 flex max-w-5xl flex-col items-center gap-20 px-6">
          <SectionBadge>Main Event</SectionBadge>

          <GradientDivider>Theme of Event</GradientDivider>

          <ThemeDescriptionBox />

          <DayCard
            dayLabel="DAY 00"
            title="Judul Talkshow Main Event"
            description={<ThemeDescription />}
            imageSrc="/images/speakers/speaker.png"
            imageAlt="Pembicara Main Event"
            imagePosition="left"
            boxed
          />
        </section>
      </ScrollReveal>

      {/* Date & Location */}
      <ScrollReveal>
        <section className="relative z-10 mx-auto mt-20 flex max-w-5xl flex-col items-center gap-10 px-6">
          <div className="pointer-events-none absolute top-[-60%] left-1/2 z-0 w-screen -translate-x-1/2">
            <div className="absolute left-[-5%] opacity-80 select-none">
              <Image
                alt=""
                aria-hidden="true"
                className="w-[300px] object-contain sm:w-[600px] md:w-[1000px]"
                height={1000}
                src="/images/ornament3-left.png"
                width={1000}
              />
            </div>
          </div>

          <GradientDivider>Date of the Event</GradientDivider>
          <LocationPill location="Aula CC Timur Institut Teknologi Bandung" />
        </section>
      </ScrollReveal>

      {/* Highlights */}
      <ScrollReveal>
        <section className="relative z-10 mt-16 px-6">
          <section className="relative z-10 px-6 py-20">
            <div className="mx-auto max-w-6xl">
              {/* Capsule Pill Header */}
              <div className="mb-12 flex justify-center">
                <h2 className="text-highlight-gradient-dark-bg pb-2 text-3xl font-bold tracking-wide [filter:drop-shadow(0_4px_4px_rgba(0,0,0,0.25))] md:text-6xl">
                  Last Year's Highlights
                </h2>
              </div>

              <EventsCarousel />
            </div>
          </section>
        </section>
      </ScrollReveal>

      <div className="relative z-10 mt-24">
        <Footer />
      </div>
    </main>
  );
}
