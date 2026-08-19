"use client";

import Image from "next/image";
import { useRef } from "react";
import { GradientDivider } from "@/app/_components/event-page/theme-divider";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  { id: 1, title: "Early Registration", date: "20 Agustus - 26 Agustus" },
  { id: 2, title: "Normal Registration", date: "27 Agustus - 3 September" },
  { id: 3, title: "Technical Meeting", date: "8 September" },
  { id: 4, title: "Preliminary Round", date: "9 September - 5 Oktober" },
  { id: 5, title: "Deadline Paper Submission", date: "5 Oktober" },
  { id: 6, title: "Judges Review", date: "6-20 Oktober" },
  { id: 7, title: "Finalist Announcement", date: "21 Oktober" },
  { id: 8, title: "Mentoring", date: "22 Oktober - 1 November" },
  { id: 9, title: "Final Round Technical Meeting", date: "2 November" },
  { id: 10, title: "Final Presentation", date: "8 November" },
];

export function ErcTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: 300 * direction,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:gap-[85px] lg:px-8 lg:py-24"
      id="erc-timeline"
    >
      {/* Ornament 3 Left */}
      <div className="pointer-events-none absolute top-[-20%] left-[-15%] z-0 opacity-80 select-none">
        <Image
          src="/images/ornament3-left.png"
          alt=""
          width={1000}
          height={1000}
          className="w-[300px] object-contain sm:w-[600px] md:w-[1000px]"
        />
      </div>

      <Image
        alt=""
        aria-hidden="true"
        className="absolute right-[-50%] w-[1400px] opacity-80 backdrop-blur-lg max-md:w-[600px] max-md:opacity-40"
        height={900}
        src="/images/registration/regis-circle-left.png"
        width={900}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="absolute top-[90%] left-[-40%] z-0 w-[1400px] rotate-[45deg] opacity-70 backdrop-blur-lg max-md:w-[600px] max-md:opacity-40"
        height={900}
        src="/images/registration/regis-circle-left.png"
        width={900}
      />
      <GradientDivider>Timeline</GradientDivider>

      {/* Horizontal timeline carousel */}
      <div className="relative mx-auto w-full">
        <div
          ref={trackRef}
          className="no-scrollbar flex items-center gap-8 overflow-x-auto scroll-smooth px-4 py-12 md:gap-16 md:px-8"
        >
          {/* Horizontal Glowing Axis Line */}
          <div className="bg-infest-pink/40 absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 shadow-[0_0_10px_#E306D9]" />

          {TIMELINE_EVENTS.map((event, index) => {
            const isTop = index % 2 === 0;

            return (
              <div key={event.id} className="relative shrink-0">
                {/* Node Circle on Axis Line */}
                <div className="bg-infest-pink animate-glow-pulse absolute top-1/2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_rgba(227,6,217,0.8)]" />

                {/* Card (Top or Bottom) */}
                <div
                  className={`bg-gradient-custom text-shadow-links glow-purple flex w-32 flex-col items-center justify-center rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(227,6,217,0.3)] md:min-h-24 md:w-48 ${
                    isTop ? "mb-40" : "mt-40"
                  }`}
                >
                  <h3 className="text-sm font-bold text-white md:text-base">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#E5C7F7] md:text-sm">
                    {event.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          aria-label="Previous timeline"
          className="bg-dark-purple/60 absolute top-1/2 left-0 z-20 -translate-y-1/2 rounded-full p-2 text-white transition-all duration-200 hover:scale-110 hover:bg-white/20 active:scale-95"
          onClick={() => scrollTrack(-1)}
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
          className="bg-dark-purple/60 absolute top-1/2 right-0 z-20 -translate-y-1/2 rounded-full p-2 text-white transition-all duration-200 hover:scale-110 hover:bg-white/20 active:scale-95"
          onClick={() => scrollTrack(1)}
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
      </div>
    </section>
  );
}
