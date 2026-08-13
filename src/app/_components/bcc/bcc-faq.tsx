"use client";

import { useState } from "react";
import Image from "next/image";

import { GradientDivider } from "../event-page/theme-divider";

export type FaqItem = {
  question: string;
  answer: string;
};

const bccFaqItems: FaqItem[] = [
  {
    question: "Orkhan",
    answer: "Muhammad Orkhan adalah Project Manager Website INFEST 2026.",
  },
  {
    question: "When yh?",
    answer:
      "Rangkaian acara INFEST 2026 akan berlangsung dari bulan Juli hingga November 2026. Pantau terus linimasa dan media sosial resmi kami untuk tanggal pendaftaran pasti!",
  },
  {
    question: "Bang orkhan apa rahasianya?",
    answer:
      "Rahasianya adalah kerja keras, dedikasi tanpa henti, riset mendalam, serta dukungan penuh dari seluruh panitia KSEP ITB dalam menyajikan festival investasi terbaik di Indonesia.",
  },
  {
    question: "Bang Orkhan bagi linkedin nya dong",
    answer:
      "Silakan terhubung secara profesional melalui LinkedIn Muhammad Orkhan untuk berdiskusi seputar finansial, pasar modal, dan kolaborasi event!",
  },
  {
    question: "Bang orkhan jomblo ga?",
    answer:
      "Pertanyaan menarik! Fokus utamanya saat ini adalah menyukseskan INFEST 2026. Temui Bang Orkhan secara langsung pada sesi seminar puncak 😉",
  },
];

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="flex w-full flex-col overflow-hidden bg-[#6B0078] shadow-[inset_5px_6px_4.5px_0px_rgba(255,254,255,0.25)] backdrop-blur-md transition-all duration-300 ease-in-out"
            style={{ borderRadius: isOpen ? "20px" : "100px" }}
          >
            {/* Header Tombol Locked (Posisi & Radius Atas Tetap Kunci) */}
            <button
              type="button"
              onClick={() => toggleFaq(index)}
              className="flex w-full cursor-pointer items-center justify-between px-8 py-4 text-left text-base font-medium text-white sm:text-lg"
            >
              <span>{faq.question}</span>
              <span
                className={`text-infest-white ml-4 flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                  />
                </svg>
              </span>
            </button>

            {/* Container Tirai: Merekah & Meluncur Turun Ke Bawah */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/10 px-8 py-5 text-sm leading-relaxed text-[#E5C7F7] sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function BccFaq() {
  return (
    <section
      className="relative z-10 mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center justify-start px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24"
      id="bcc-faq"
    >
      {/* Ornament 3 Right */}
      <div className="pointer-events-none absolute right-[-20%] bottom-[5%] z-0 opacity-80 select-none">
        <Image
          src="/images/ornament3-right.png"
          alt=""
          width={1000}
          height={1000}
          className="w-[300px] object-contain sm:w-[600px] md:w-[1000px]"
        />
      </div>
      {/* Header Title */}
      <GradientDivider>Frequently Asked Questions</GradientDivider>

      <div className="relative z-10 mx-auto mt-12 w-full max-w-4xl break-words">
        {/* Accordion List */}
        <FaqAccordion items={bccFaqItems} />
      </div>
    </section>
  );
}
