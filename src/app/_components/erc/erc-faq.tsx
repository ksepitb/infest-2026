"use client";

import Image from "next/image";

import { FaqAccordion } from "@/components/faq-accordion";
import { GradientDivider } from "@/app/_components/event-page/theme-divider";

export type FaqItem = {
  question: string;
  answer: string;
};

const ercFaqItems: FaqItem[] = [
  {
    question:
      "Apakah anggota tim boleh berasal dari universitas/institusi yang berbeda?",
    answer:
      "Boleh, dengan syarat dapat menunjukkan KTM (Kartu Tanda Mahasiswa).",
  },
  {
    question:
      "Apakah peserta diperbolehkan berada pada lebih dari 1 tim pada ERC INFEST 2026?",
    answer: "Tidak diperbolehkan.",
  },
  {
    question:
      "Apakah peserta yang sudah terdaftar boleh digantikan oleh orang lain?",
    answer: "Tidak diperbolehkan.",
  },
  {
    question:
      "Apakah babak final akan dilaksanakan secara offline atau online?",
    answer: "Babak final akan dilaksanakan secara offline di ITB Ganesha.",
  },
  {
    question: "Apakah seluruh peserta akan mendapatkan e-sertifikat?",
    answer:
      "Ya, seluruh peserta akan mendapatkan e-sertifikat yang menunjukkan bahwa mereka telah berpartisipasi di ERC INFEST 2026.",
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
