"use client";

import Image from "next/image";
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

    const abs = Math.abs(diff);
    const scale = diff === 0 ? 1 : abs === 1 ? 0.85 : 0.7;
    const opacity = diff === 0 ? 1 : abs === 1 ? 0.8 : 0.5;
    const filter = `brightness(${diff === 0 ? 100 : abs === 1 ? 60 : 40}%)`;
    const zIndex = diff === 0 ? 30 : abs === 1 ? 20 : 10;

    const translateX =
      diff === 0
        ? "0px"
        : diff === -1
          ? "clamp(-200px, -18vw, -120px)"
          : diff === 1
            ? "clamp(120px, 18vw, 200px)"
            : diff === -2
              ? "clamp(-360px, -32vw, -220px)"
              : "clamp(220px, 32vw, 360px)";

    return {
      transform: `translateX(${translateX}) scale(${scale})`,
      opacity,
      filter,
      zIndex,
    };
  };

  return (
    <div className="flex w-full justify-center px-6">
      <div className="relative flex w-full max-w-[1428px] flex-col items-center gap-6 overflow-hidden py-10">
        <h2
          className="font-poppins mx-auto max-w-full text-center text-[32px] leading-tight font-bold tracking-tight text-transparent select-none [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-[44px] md:text-[56px] lg:text-[60px]"
          style={{
            background: "linear-gradient(180deg, #E306D9 20.19%, #FFFEFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            paddingBottom: "8px",
          }}
        >
          Last Year&apos;s Highlights
        </h2>

        <div className="relative flex h-[clamp(150px,24vw,320px)] w-full items-center justify-center">
          {IMAGES.map((src, index) => {
            const cardStyle = getCardStyle(index);

            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`View slide ${index + 1}`}
                className="absolute w-[clamp(280px,45vw,600px)] shrink-0 cursor-pointer overflow-hidden rounded-3xl bg-cover bg-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
                style={{
                  aspectRatio: "15 / 8",
                  backgroundImage: `url(${src})`,
                  ...cardStyle,
                }}
              />
            );
          })}
        </div>

        <div className="z-40 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            className="flex h-8 w-8 items-center justify-center transition hover:scale-110"
            aria-label="Previous slide"
          >
            <Image
              alt=""
              aria-hidden="true"
              className="h-5 w-5"
              height={20}
              src="/images/left-arrow.svg"
              width={20}
            />
          </button>

          <div className="flex items-center gap-2.5">
            {IMAGES.map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className="transition-transform duration-300 hover:scale-110"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4"
                    height={16}
                    src={
                      isActive
                        ? "/images/dot-carousel-purple.svg"
                        : "/images/dot-carousel-grey.svg"
                    }
                    width={16}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="flex h-8 w-8 items-center justify-center transition hover:scale-110"
            aria-label="Next slide"
          >
            <Image
              alt=""
              aria-hidden="true"
              className="h-5 w-5"
              height={20}
              src="/images/right-arrow.svg"
              width={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
