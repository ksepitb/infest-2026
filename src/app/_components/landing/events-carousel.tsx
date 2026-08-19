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
    image: "/images/lantik.jpg",
  },
  {
    id: 2,
    title: "Equity Research Competition",
    description:
      "Lomba analisis ekuitas dan saham tingkat nasional untuk menguji kemampuan riset keuangan, penilaian valuasi perusahaan, serta memberikan rekomendasi investasi profesional.",
    image: "/images/carousel/erc.jpg",
  },
  {
    id: 3,
    title: "Event",
    description:
      "Rangkaian acara INFEST 2026 terdiri dari workshop online interaktif sebagai pre-event, yang dilengkapi dengan diskusi dan studi kasus. Acara ini akan ditutup dengan seminar puncak yang diselenggarakan secara hybrid, menampilkan tiga sesi berbeda yang dibawakan oleh para pembicara berpengalaman.",
    image: "/images/carousel/main-event.JPG",
  },
  {
    id: 4,
    title: "Business Case Competition",
    description:
      "Kompetisi studi kasus bisnis yang menantang mahasiswa dalam merumuskan strategi bisnis yang inovatif, solutif, dan berdampak nyata bagi industri pasar modal.",
    image: "/images/carousel/bcc.jpg",
  },
  {
    id: 5,
    title: "Awarding & Networking",
    description:
      "Malam penganugerahan bagi pemenang kompetisi INFEST 2026 serta kesempatan berjejaring dengan investor, profesional, dan peserta dari seluruh Indonesia.",
    image: "/images/carousel/networking.JPG",
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
      <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden sm:h-[320px]">
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
              className={`bg-dark-purple absolute top-0 flex h-[280px] w-full max-w-[720px] flex-col overflow-hidden rounded-3xl shadow-[0_0_35px_rgba(240,74,201,0.25)] backdrop-blur-md transition-all duration-500 ease-out sm:h-[300px] sm:w-[500px] ${transformStyle}`}
              onClick={() => setActiveIndex(index)}
              style={{ zIndex, opacity }}
            >
              {/* Background Photo */}
              <div className="relative h-full w-full">
                <Image
                  alt={event.title}
                  className="h-full w-full object-cover"
                  fill
                  src={event.image}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E011E] via-[#0E011E]/60 to-transparent" />

                {/* Content Overlay (Centered active card detail) */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="text-highlight-gradient-dark-bg glow-text-1 mb-2 text-2xl font-bold drop-shadow-[6px_4px_22.1px_rgba(0,0,0,0.50)] sm:text-4xl">
                    {event.title}
                  </h3>
                  <p className="text-infest-white/90 mb-6 text-xs leading-relaxed font-medium sm:text-sm">
                    {event.description}
                  </p>
                  <div className="flex justify-end">
                    <a
                      className="bg-infest-white hover:bg-infest-white/70 inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-2 text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
                      href="/events"
                    >
                      <span className="text-gradient-4 drop-shadow-[6px_4px_22.1px_rgba(0,0,0,0.50)]">
                        See More
                      </span>
                    </a>
                  </div>
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
          className=""
          onClick={prevSlide}
          type="button"
        >
          <svg
            className="hover:text-infest-pink h-5 w-5 cursor-pointer transition-all hover:scale-125"
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
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-infest-pink h-3.5 w-3.5 shadow-[0_0_10px_#F04AC9]"
                  : "h-2.5 w-2.5 bg-white/30 hover:scale-125 hover:bg-white/60"
              }`}
              onClick={() => setActiveIndex(i)}
              type="button"
            />
          ))}
        </div>

        <button
          aria-label="Next event"
          className=""
          onClick={nextSlide}
          type="button"
        >
          <svg
            className="hover:text-infest-pink h-5 w-5 cursor-pointer transition-all hover:scale-125"
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
