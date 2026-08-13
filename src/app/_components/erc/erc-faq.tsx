"use client";

import Image from "next/image";

import { FaqAccordion } from "~/components/faq-accordion";
import { SectionHeader } from "~/components/section-header";
import { GradientDivider } from "../event-page/theme-divider";

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
  {
    question: "Apakah peserta boleh bergabung di lebih dari satu tim?",
    answer: "Tidak, setiap peserta hanya boleh tergabung dalam satu tim.",
  },
];

export function ErcFaq() {
  return (
    <section
      className="relative z-10 mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center justify-start px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24"
      id="erc-faq"
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
        <FaqAccordion items={ercFaqItems} />
      </div>
    </section>
  );
}
