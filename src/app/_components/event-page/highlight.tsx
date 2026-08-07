"use client";

import { useState } from "react";

const IMAGES = [
  "/images/highlights/highlight-1.jpg",
  "/images/highlights/highlight-2.jpg",
  "/images/highlights/highlight-3.jpg",
  "/images/highlights/highlight-4.jpg",
  "/images/highlights/highlight-5.jpg",
];

export function HighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index: number) => {
    const total = IMAGES.length;
    let diff = index - currentIndex;

    if (diff < -2) diff += total;
    if (diff > 2) diff -= total;

    if (diff === 0) {
      return {
        zIndex: 30,
        opacity: 1,
        transform: "translateX(0px) scale(1)",
        filter: "brightness(100%)",
      };
    }
    if (diff === -1) {
      return {
        zIndex: 20,
        opacity: 0.8,
        transform: "translateX(-200px) scale(0.85)",
        filter: "brightness(60%)",
      };
    }
    if (diff === 1) {
      return {
        zIndex: 20,
        opacity: 0.8,
        transform: "translateX(200px) scale(0.85)",
        filter: "brightness(60%)",
      };
    }
    if (diff === -2) {
      return {
        zIndex: 10,
        opacity: 0.5,
        transform: "translateX(-360px) scale(0.7)",
        filter: "brightness(40%)",
      };
    }
    if (diff === 2) {
      return {
        zIndex: 10,
        opacity: 0.5,
        transform: "translateX(360px) scale(0.7)",
        filter: "brightness(40%)",
      };
    }

    return { zIndex: 0, opacity: 0, transform: "scale(0)" };
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div
        style={{
          display: "flex",
          width: "1428px",
          maxWidth: "100%",
          padding: "40px 64px",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
        className="relative overflow-hidden"
      >
        <h2
          style={{
            width: "1182px",
            maxWidth: "100%",
            textAlign: "center",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: "Poppins, sans-serif",
            fontSize: "60px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "1.2",
            letterSpacing: "-1px",
            background: "linear-gradient(180deg, #E306D9 20.19%, #FFFEFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            paddingBottom: "8px", // Mencegah clipping ekor huruf di bagian bawah (g, y, p)
          }}
          className="mx-auto select-none"
        >
          Last Year&apos;s Highlights
        </h2>

        <div className="relative flex h-[320px] w-full items-center justify-center">
          {IMAGES.map((src, index) => {
            const cardStyle = getCardStyle(index);

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  position: "absolute",
                  width: "600px",
                  height: "320px",
                  flexShrink: 0,
                  background: `url(${src}) lightgray 50% / cover no-repeat`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  isolation: "isolate",
                  willChange: "transform, filter",
                  transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                  cursor: "pointer",
                  ...cardStyle,
                }}
              />
            );
          })}
        </div>

        <div className="z-40 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="flex h-8 w-8 items-center justify-center transition hover:scale-110"
            aria-label="Previous slide"
          >
            <img src="/images/left-arrow.svg" alt="Previous" className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2.5">
            {IMAGES.map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="transition-transform duration-300 hover:scale-110"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <img
                    src={
                      isActive
                        ? "/images/dot-carousel-purple.svg"
                        : "/images/dot-carousel-grey.svg"
                    }
                    alt={isActive ? "Active slide" : "Inactive slide"}
                    className="h-4 w-4"
                  />
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="flex h-8 w-8 items-center justify-center transition hover:scale-110"
            aria-label="Next slide"
          >
            <img src="/images/right-arrow.svg" alt="Next" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}