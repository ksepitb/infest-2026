import Image from "next/image";
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

import { SectionBadge } from "~/app/_components/event-page/section-badge";
import { GradientDivider } from "~/app/_components/event-page/theme-divider";
import { DayCard, Highlight } from "~/app/_components/event-page/day-card";
import { LocationPill } from "~/app/_components/event-page/location-pill";
import { glowTextShadow } from "~/app/_components/event-page/styles";
import { HighlightsCarousel } from "~/app/_components/event-page/highlight";

function ThemeDescription() {
  return (
    <>
      INFEST 2025, dengan tema{" "}
      <Highlight>
        &ldquo;Navigating the Future: Smart Investment in the Times of Changes,&rdquo;
      </Highlight>{" "}
      berfokus pada strategi investasi cerdas untuk menghadapi masa-masa penuh perubahan. Acara
      ini akan membekali peserta dengan pola pikir yang proaktif dan tangguh, serta membahas
      pemanfaatan teknologi seperti AI dalam mengambil keputusan investasi di tengah dinamika
      pasar dan krisis ekonomi.
    </>
  );
}

export default function EventsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#3A0CA3] via-[#4B0F91] to-[#12001F] pb-24">
      <Navbar />

      {/* ================= Hero: Pre Event & Main Event ================= */}
      <section className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center">
        {/*
          Logo "INFEST" — export langsung dari Figma sebagai SVG
          (klik logo di Figma > Copy as > Copy as SVG), lalu taruh
          filenya di /public/images/infest-logo.svg
        */}
        <Image
          src="/images/infest-logo.svg"
          alt="INFEST"
          width={254}
          height={185}
          className="mb-6 h-20 w-auto lg:h-28"
        />
        <h1
          style={{ ...glowTextShadow, color: "#FFF", letterSpacing: "-1.92px" }}
          className="w-full max-w-[807px] font-poppins text-[40px] font-bold leading-[100%] lg:text-[96px]"
        >
          Pre Event &amp; Main Event
        </h1>
      </section>

      {/* ================= Pre-Events ================= */}
      <section className="relative mx-auto mt-20 flex max-w-5xl flex-col items-center gap-24 px-6">
        <SectionBadge>Pre-Events</SectionBadge>

        <DayCard
          dayLabel="DAY 00"
          title="Workshop"
          imageSrc="/images/speakers/speaker-1.jpg"
          imageAlt="Pembicara Workshop"
          imagePosition="right"
          boxed
          description={<ThemeDescription />}
        />

        <DayCard
          dayLabel="DAY 00"
          title="The 5-Day Trading Challenge"
          imageSrc="/images/speakers/speaker-2.jpg"
          imageAlt="Pembicara Trading Challenge"
          imagePosition="left"
          boxed
          description={<ThemeDescription />}
        />
      </section>

      {/* ================= Main Event ================= */}
      <section className="relative mx-auto mt-24 flex max-w-5xl flex-col items-center gap-20 px-6">
        <SectionBadge>Main Event</SectionBadge>

        <GradientDivider>Theme of Event</GradientDivider>

        <DayCard
          dayLabel="DAY 00"
          title="Judul Talkshow Main Event"
          imageSrc="/images/speakers/speaker-3.jpg"
          imageAlt="Pembicara Main Event"
          imagePosition="left"
          boxed
          description={<ThemeDescription />}
        />
      </section>

      {/* ================= Date of the Event ================= */}
      <section className="relative mx-auto mt-20 flex max-w-5xl flex-col items-center gap-10 px-6">
        <GradientDivider>Date of the Event</GradientDivider>
        <LocationPill location="Aula CC Timur Institut Teknologi Bandung" />
      </section>

      {/* ================= Last Year's Highlights ================= */}
      <section className="relative mt-24 px-6">
        <HighlightsCarousel />
      </section>

      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
