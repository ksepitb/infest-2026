"use client";

import Image from "next/image";
import { useRef } from "react";
import { GradientDivider } from "@/app/_components/event-page/theme-divider";

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
      left: 300 * direction,
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
      <div className="relative z-10 mx-auto w-full max-w-[1509px]">
        {/* Section Title */}
        <GradientDivider>Timeline</GradientDivider>

        {/* Timeline Track with Staggered Cards */}
        <div className="relative mx-auto mt-10 mb-10 md:mt-24 md:mb-16">
          <div
            ref={trackRef}
            className="no-scrollbar flex items-center gap-8 overflow-x-auto scroll-smooth px-4 py-12 md:gap-16 md:px-8"
          >
            {/* Horizontal Glowing Axis Line */}
            <div className="bg-infest-pink/40 absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 shadow-[0_0_10px_#E306D9]" />

            {items.map((item, index) => {
              const isTop = index % 2 === 0;

              return (
                <div key={index} className="relative shrink-0">
                  {/* Node Circle on Axis Line */}
                  <div className="bg-infest-pink absolute top-1/2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_rgba(227,6,217,0.8)]" />

                  {/* Card (Top or Bottom) */}
                  <div
                    className={`bg-gradient-custom flex w-32 flex-col items-center justify-center rounded-2xl p-4 text-center md:min-h-24 md:w-48 ${
                      isTop ? "mb-32" : "mt-32"
                    }`}
                  >
                    <h4 className="text-sm font-bold text-white md:text-base">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs font-medium text-[#E5C7F7] md:text-sm">
                      {item.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows at line ends */}
          <button
            aria-label="Previous timeline"
            className="bg-dark-purple/60 absolute top-1/2 left-0 z-20 -translate-y-1/2 rounded-full p-2 text-white transition-colors hover:bg-white/20"
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
            className="bg-dark-purple/60 absolute top-1/2 right-0 z-20 -translate-y-1/2 rounded-full p-2 text-white transition-colors hover:bg-white/20"
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
        </div>
      </div>
    </section>
  );
}
