import Image from "next/image";
import { HeaderLogo } from "~/app/_components/event-page/logo-infest";
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

import { SectionBadge } from "~/app/_components/event-page/section-badge";
import { GradientDivider } from "~/app/_components/event-page/theme-divider";
import { DayCard, Highlight } from "~/app/_components/event-page/day-card";
import { LocationPill } from "~/app/_components/event-page/location-pill";
import { HighlightsCarousel } from "~/app/_components/event-page/highlight";

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

export default function EventsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#16001F] pb-24 text-white antialiased">
      {/* Background Vector Ornaments & Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Glow ambient spots */}
        <div className="absolute top-[-10%] left-1/2 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#530074]/35 blur-[140px]" />
        <div className="absolute top-[30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#8E00A6]/20 blur-[150px]" />
        <div className="absolute top-[65%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#530074]/30 blur-[160px]" />

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

      <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center">
        <div className="pointer-events-none absolute top-0 left-1/2 z-0 w-screen -translate-x-1/2">
          {/* Left Ornament */}
          <div className="absolute top-[20%] left-0 opacity-80 select-none md:top-[25%] lg:top-[10%]">
            <Image
              src="/images/ornament1-left.png"
              alt=""
              width={600}
              height={600}
              className="w-[200px] object-contain sm:w-[250px] md:w-[300px] lg:w-[600px]"
            />
          </div>
          <div className="absolute top-[20%] right-0 opacity-80 select-none md:top-[25%] lg:top-[10%]">
            <Image
              src="/images/ornament1-right.png"
              alt=""
              width={600}
              height={600}
              className="w-[200px] object-contain sm:w-[250px] md:w-[300px] lg:w-[600px]"
            />
          </div>
        </div>

        <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center">
          <HeaderLogo />
        </section>
      </section>

      <section className="relative z-10 mx-auto mt-20 flex max-w-5xl flex-col items-center gap-24 px-6">
        <div className="pointer-events-none absolute top-[-18%] left-1/2 z-0 w-screen -translate-x-1/2 scale-125 opacity-85 select-none">
          <Image
            src="/images/ornament2.png"
            alt=""
            width={1920}
            height={600}
            className="w-full object-contain"
          />
        </div>

        <SectionBadge>Pre-Events</SectionBadge>

        <DayCard
          dayLabel="DAY 00"
          title="Workshop"
          imageSrc="/images/speakers/speaker.png"
          imageAlt="Pembicara Workshop"
          imagePosition="right"
          boxed
          description={<ThemeDescription />}
        />

        <DayCard
          dayLabel="DAY 00"
          title="The 5-Day Trading Challenge"
          imageSrc="/images/speakers/speaker.png"
          imageAlt="Pembicara Trading Challenge"
          imagePosition="left"
          boxed
          description={<ThemeDescription />}
        />
      </section>

      <section className="relative z-10 mx-auto mt-24 flex max-w-5xl flex-col items-center gap-20 px-6">
        <SectionBadge>Main Event</SectionBadge>

        <GradientDivider>Theme of Event</GradientDivider>

        <DayCard
          dayLabel="DAY 00"
          title="Judul Talkshow Main Event"
          imageSrc="/images/speakers/speaker.png"
          imageAlt="Pembicara Main Event"
          imagePosition="left"
          boxed
          description={<ThemeDescription />}
        />
      </section>

      <section className="relative z-10 mx-auto mt-20 flex max-w-5xl flex-col items-center gap-10 px-6">
        <div className="pointer-events-none absolute top-[-60%] left-1/2 z-0 w-screen -translate-x-1/2">
          <div className="absolute left-[-5%] opacity-80 select-none">
            <Image
              src="/images/ornament3-left.png"
              alt=""
              width={1000}
              height={1000}
              className="w-[300px] object-contain sm:w-[600px] md:w-[1000px]"
            />
          </div>
        </div>

        <GradientDivider>Date of the Event</GradientDivider>
        <LocationPill location="Aula CC Timur Institut Teknologi Bandung" />
      </section>

      <section className="relative z-10 mt-24 px-6">
        <div className="pointer-events-none absolute top-[-90%] left-1/2 z-0 w-screen -translate-x-1/2">
          <div className="absolute right-[-5%] opacity-80 select-none">
            <Image
              src="/images/ornament3-right.png"
              alt=""
              width={1000}
              height={1000}
              className="w-[300px] object-contain sm:w-[600px] md:w-[1000px]"
            />
          </div>
        </div>

        <HighlightsCarousel />
      </section>

      <div className="relative z-10 mt-24">
        <Footer />
      </div>
    </main>
  );
}
