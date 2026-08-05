"use client";

import { useState } from "react";

import { SectionHeader } from "~/components/section-header";

export type FaqItem = {
  question: string;
  answer: string;
};

const ercFaqItems: FaqItem[] = [
  {
    question: "Siapa saja yang dapat mengikuti ERC INFEST 2026?",
    answer:
      "Mahasiswa aktif jenjang S1/D3/D4 dari seluruh perguruan tinggi di Indonesia.",
  },
  {
    question: "Berapa jumlah anggota dalam satu tim?",
    answer:
      "Setiap tim terdiri dari 2 hingga 3 orang mahasiswa dari perguruan tinggi yang sama.",
  },
  {
    question: "Bahasa apa yang digunakan dalam penyusunan paper?",
    answer:
      "Laporan/paper disusun menggunakan Bahasa Indonesia yang baik dan benar sesuai Guidebook.",
  },
  {
    question: "Di mana peserta dapat mengunduh Guidebook ERC?",
    answer:
      "Guidebook dapat diunduh melalui tombol pendaftaran atau menu utama website.",
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
            className="flex w-full flex-col overflow-hidden rounded-[24px] backdrop-blur-md transition-all duration-300"
            style={{
              background: "#6B0078",
              boxShadow: "inset 5px 6px 4.5px 0px rgba(255, 254, 255, 0.25)",
            }}
          >
            {/* Header Tombol Locked (Posisi & Radius Atas Tetap Kunci) */}
            <button
              type="button"
              onClick={() => toggleFaq(index)}
              className="flex w-full cursor-pointer items-center justify-between px-8 py-4 text-left text-base font-medium text-white sm:text-lg"
            >
              <span>{faq.question}</span>
              <span
                className={`text-infest-white ml-4 flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
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
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`border-t border-white/10 px-8 py-5 text-sm leading-relaxed text-[#E5C7F7] transition-all duration-300 ease-in-out sm:text-base ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0"
                  }`}
                >
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

export function ErcFaq() {
  return (
    <section
      className="relative z-10 flex w-full scroll-mt-32 flex-col justify-start px-6 py-20"
      id="erc-faq"
    >
      <div className="relative z-10 mx-auto w-full max-w-4xl">
        {/* Header Title */}
        <SectionHeader
          title="Frequently Asked"
          highlightText="Questions"
          className="mb-14"
        />

        {/* Accordion List */}
        <FaqAccordion items={ercFaqItems} />
      </div>
    </section>
  );
}
