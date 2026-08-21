"use client";

import Image from "next/image";
import { useRef } from "react";
import { GradientDivider } from "@/app/_components/event-page/theme-divider";

interface TimelineEvent {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
}

const EVENT_TIMELINE: TimelineEvent[] = [
  {
    id: 1,
    title: "Pre-Event : Chart Your Move",
    subtitle: "Technical Analysis Playbook",
    date: "Coming Soon",
  },
  {
    id: 2,
    title: "Pre-Event : The Big Picture",
    subtitle: "Connecting Macro Dots",
    date: "Coming Soon",
  },
  {
    id: 3,
    title: "Pre-Event : Trading Challenge",
    subtitle: "5 Days Simulation",
    date: "Coming Soon",
  },
  {
    id: 4,
    title: "Main Event : Panel Discussion",
    subtitle: "The Algorithmic Edge",
    date: "8 November",
  },
  {
    id: 5,
    title: "Main Event : Interactive Discussion",
    subtitle: "Riding the Bear",
    date: "8 November",
  },
  {
    id: 6,
    title: "Main Event : Round Table",
    subtitle: "The Long Game",
    date: "8 November",
  },
  {
    id: 7,
    title: " Closing",
    subtitle: "Aula CC Timur ITB",
    date: "8 November",
  },
];

export function EventTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: 300 * direction, behavior: "smooth" });
  };

  return (
    <section
      className="relative mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:gap-[85px] lg:px-8 lg:py-24"
      id="event-timeline"
    >
      {/* Ornaments */}
      <div className="pointer-events-none absolute top-[-10%] left-[-12%] z-0 opacity-80 select-none">
        <Image
          src="/images/ornament3-left.png"
          alt=""
          width={1000}
          height={1000}
          className="w-[300px] object-contain sm:w-[600px] md:w-[800px]"
        />
      </div>

      <GradientDivider>Timeline</GradientDivider>

      <div className="relative mx-auto w-full">
        <div
          ref={trackRef}
          className="no-scrollbar flex items-center gap-8 overflow-x-auto scroll-smooth px-4 py-12 md:gap-16 md:px-8"
        >
          <div className="bg-infest-pink/40 absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 shadow-[0_0_10px_#E306D9]" />

          {EVENT_TIMELINE.map((event, index) => {
            const isTop = index % 2 === 0;
            return (
              <div key={event.id} className="relative shrink-0">
                <div className="bg-infest-pink animate-glow-pulse absolute top-1/2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_rgba(227,6,217,0.8)]" />
                <div
                  className={`bg-gradient-custom text-shadow-links flex w-40 flex-col items-center justify-center rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(227,6,217,0.3)] md:min-h-24 md:w-52 ${
                    isTop ? "mb-40" : "mt-40"
                  }`}
                >
                  <h3 className="text-sm font-bold text-white md:text-[15px] leading-tight">
                    {event.title}
                  </h3>
                  {event.subtitle && (
                    <p className="mt-1 text-xs font-semibold text-[#FFB800] md:text-xs">
                      {event.subtitle}
                    </p>
                  )}
                  <p className="mt-1 text-xs font-medium text-[#E5C7F7] md:text-sm">
                    {event.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

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
