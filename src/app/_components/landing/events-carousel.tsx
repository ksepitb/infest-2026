"use client";

import Image from "next/image";
import { useState } from "react";

interface EventItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const events: EventItem[] = [
  {
    id: 1,
    title: "Pre-Event Workshop",
    description:
      "Workshop online interaktif bersama para ahli keuangan dan mentor ternama untuk membekali peserta dengan pengetahuan dasar valuasi saham dan analisis bisnis.",
    image: "/images/event1.png",
  },
  {
    id: 2,
    title: "Equity Research Competition",
    description:
      "Lomba analisis ekuitas dan saham tingkat nasional untuk menguji kemampuan riset keuangan, penilaian valuasi perusahaan, serta memberikan rekomendasi investasi profesional.",
    image: "/images/event2.png",
  },
  {
    id: 3,
    title: "Event",
    description:
      "Rangkaian acara INFEST 2025 terdiri dari workshop online interaktif sebagai pre-event, yang dilengkapi dengan diskusi dan studi kasus. Acara ini akan ditutup dengan seminar puncak yang diselenggarakan secara hybrid, menampilkan tiga sesi berbeda yang dibawakan oleh para pembicara berpengalaman.",
    image: "/images/event1.png",
  },
  {
    id: 4,
    title: "Business Case Competition",
    description:
      "Kompetisi studi kasus bisnis yang menantang mahasiswa dalam merumuskan strategi bisnis yang inovatif, solutif, dan berdampak nyata bagi industri pasar modal.",
    image: "/images/event2.png",
  },
  {
    id: 5,
    title: "Awarding & Networking",
    description:
      "Malam penganugerahan bagi pemenang kompetisi INFEST 2026 serta kesempatan berjejaring dengan investor, profesional, dan peserta dari seluruh Indonesia.",
    image: "/images/event1.png",
  },
];

export function EventsCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full py-8">
      {/* 3D Coverflow Stage */}
      <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden sm:h-[480px]">
        {events.map((event, index) => {
          let offset = index - activeIndex;
          if (offset < -2) offset += events.length;
          if (offset > 2) offset -= events.length;

          const isCenter = offset === 0;
          const isLeft1 = offset === -1;
          const isRight1 = offset === 1;
          const isLeft2 = offset === -2;
          const isRight2 = offset === 2;

          let transformStyle = "";
          let zIndex = 0;
          let opacity = 0;

          if (isCenter) {
            transformStyle = "translate-x-0 scale-100";
            zIndex = 30;
            opacity = 1;
          } else if (isLeft1) {
            transformStyle =
              "-translate-x-[55%] sm:-translate-x-[65%] scale-85 opacity-70";
            zIndex = 20;
            opacity = 0.75;
          } else if (isRight1) {
            transformStyle =
              "translate-x-[55%] sm:translate-x-[65%] scale-85 opacity-70";
            zIndex = 20;
            opacity = 0.75;
          } else if (isLeft2) {
            transformStyle =
              "-translate-x-[95%] sm:-translate-x-[115%] scale-70 opacity-40";
            zIndex = 10;
            opacity = 0.35;
          } else if (isRight2) {
            transformStyle =
              "translate-x-[95%] sm:translate-x-[115%] scale-70 opacity-40";
            zIndex = 10;
            opacity = 0.35;
          }

          return (
            <div
              key={event.id}
              className={`absolute top-0 flex h-full w-[85%] max-w-[580px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-[#F04AC9]/40 bg-[#160228]/90 shadow-[0_0_35px_rgba(240,74,201,0.25)] backdrop-blur-md transition-all duration-500 ease-out sm:w-[580px] ${transformStyle}`}
              onClick={() => setActiveIndex(index)}
              style={{ zIndex, opacity }}
            >
              {/* Background Photo */}
              <div className="relative h-full w-full">
                <Image
                  alt={event.title}
                  className="h-full w-full object-cover"
                  fill
                  priority={isCenter}
                  src={event.image}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E011E] via-[#0E011E]/60 to-transparent" />

                {/* Content Overlay (Centered active card detail) */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="mb-2 text-2xl font-black text-white sm:text-3xl">
                    {event.title}
                  </h3>
                  <p className="mb-6 text-xs leading-relaxed text-white/90 sm:text-sm">
                    {event.description}
                  </p>
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-xs font-black tracking-wide text-[#140228] shadow-[0_0_15px_rgba(255,255,255,0.4)] transition hover:bg-white/90"
                    href="#register"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls: Arrow Left, Dots, Arrow Right */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          aria-label="Previous event"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition hover:border-[#F04AC9] hover:bg-[#F04AC9]/20"
          onClick={prevSlide}
          type="button"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M15 19l-7-7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
            />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2.5">
          {events.map((ev, i) => (
            <button
              key={ev.id}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-[#F04AC9] shadow-[0_0_12px_#F04AC9]"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
              onClick={() => setActiveIndex(i)}
              type="button"
            />
          ))}
        </div>

        <button
          aria-label="Next event"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition hover:border-[#F04AC9] hover:bg-[#F04AC9]/20"
          onClick={nextSlide}
          type="button"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
