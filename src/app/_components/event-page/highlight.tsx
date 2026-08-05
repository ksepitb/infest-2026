"use client";

import { useState } from "react";
import { gradientPinkWhiteText } from "./styles";

const highlights = [
  { src: "/images/highlights/hkust-case-competition.jpg", alt: "HKUST Investment Case Competition 2023" },
  { src: "/images/highlights/main-event-crowd.jpg", alt: "Keseruan Main Event INFEST" },
  { src: "/images/highlights/moderator.jpg", alt: "Sesi talkshow INFEST" },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="24"
      viewBox="0 0 26 35"
      fill="none"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path
        d="M13.082 0H0L12.3345 16.446L0 34.9477H13.082L25.6968 16.446L13.082 0Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function HighlightsCarousel() {
  const [active, setActive] = useState(1);

  const goPrev = () =>
    setActive((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));

  const goNext = () =>
    setActive((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center gap-8">
      <h2
        style={{ ...gradientPinkWhiteText, letterSpacing: "-1.8px" }}
        className="w-full max-w-[1182px] text-center font-poppins text-[36px] font-bold leading-none [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] lg:text-[90px]"
      >
        Last Year&apos;s Highlights
      </h2>

      <div className="flex items-center gap-4 lg:gap-8">
        <button onClick={goPrev} aria-label="Sebelumnya" className="shrink-0">
          <ArrowIcon direction="left" />
        </button>

        <div className="flex w-full max-w-3xl items-center justify-center gap-4 overflow-hidden">
          {highlights.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.src}
                onClick={() => setActive(index)}
                aria-label={`Lihat ${item.alt}`}
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`shrink-0 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "h-64 w-[380px] scale-100 opacity-100 sm:h-72 sm:w-[440px]"
                    : "h-48 w-40 scale-95 opacity-50 sm:h-56 sm:w-48"
                }`}
              />
            );
          })}
        </div>

        <button onClick={goNext} aria-label="Selanjutnya" className="shrink-0">
          <ArrowIcon direction="right" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        {highlights.map((item, index) => (
          <button
            key={item.src}
            onClick={() => setActive(index)}
            aria-label={`Ke slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              index === active ? "w-4 bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
