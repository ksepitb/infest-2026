"use client";

import Image from "next/image";
import { useRef } from "react";

interface TimelineItem {
  title: string;
  date: string;
}

export function TimelineCarousel({ items }: { items: TimelineItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: (track.clientWidth / 2) * direction,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative z-10 px-6 py-24" id="timeline">
      {/* Ornament 3 Left */}
      <div className="pointer-events-none absolute top-[10%] left-[-15%] z-0 opacity-80 select-none md:top-[-60%]">
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
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold sm:text-6xl">
            <span className="text-infest-white glow-text-3">The </span>
            <span className="text-highlight-gradient-dark-bg">Timeline</span>
          </h2>
        </div>

        {/* Timeline Track with Staggered Cards */}
        <div className="relative mt-10 mb-10 md:mt-40 md:mb-28">
          {/* Horizontal Glowing Axis Line */}
          <div className="bg-light-purple absolute top-1/2 right-0 left-0 hidden h-1 -translate-y-1/2 rounded-full md:block" />

          {/* Navigation Arrows at line ends */}
          <button
            aria-label="Previous timeline"
            className="absolute top-1/2 -left-6 z-20 -translate-y-1/2 text-white/70 transition duration-200 hover:scale-125 hover:text-white md:-left-12 md:hidden"
            onClick={() => scrollByCard(-1)}
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
            className="absolute top-1/2 -right-6 z-20 -translate-y-1/2 text-white/70 transition duration-200 hover:scale-125 hover:text-white md:-right-12 md:hidden"
            onClick={() => scrollByCard(1)}
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
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory items-start gap-4 overflow-x-auto scroll-smooth md:grid md:grid-cols-6 md:gap-0 md:overflow-visible"
          >
            {items.map((item, index) => {
              const isTop = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex w-1/2 shrink-0 snap-center flex-col items-center justify-center gap-2 md:w-auto"
                >
                  {/* Node Circle on Axis Line */}
                  <div className="bg-infest-pink z-10 h-5 w-5 shrink-0 rounded-full shadow-[0_0_15px_#EF35DB]" />

                  {/* Card (Top or Bottom) */}
                  <div
                    className={`bg-gradient-custom w-full max-w-[280px] rounded-2xl p-4 text-center backdrop-blur-md md:w-44 ${
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
  );
}
