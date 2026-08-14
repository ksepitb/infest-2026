"use client";

import Image from "next/image";

import { FaqAccordion } from "@/components/faq-accordion";
import { GradientDivider } from "@/app/_components/event-page/theme-divider";

export type FaqItem = {
  question: string;
  answer: string;
};

const bccFaqItems: FaqItem[] = [
  {
    question: "Siapa yang dapat mengikuti BCC INFEST 2026?",
    answer:
      "Mahasiswa aktif jenjang S1/D3/D4 dari seluruh perguruan tinggi di Indonesia, dalam tim beranggotakan 2\u20133 orang.",
  },
  {
    question: "Apakah anggota tim boleh berasal dari universitas yang berbeda?",
    answer:
      "Boleh. Tim dapat terdiri dari mahasiswa dari universitas yang sama maupun berbeda.",
  },
  {
    question: "Apa saja tahapan dalam BCC?",
    answer:
      "Kompetisi terbagi menjadi tiga babak: qualification round, preliminary stage, dan final round.",
  },
  {
    question: "Berapa biaya pendaftaran BCC?",
    answer:
      "Detail biaya dan mekanisme pembayaran akan diumumkan melalui guidebook resmi.",
  },
  {
    question: "Di mana peserta dapat mengunduh Guidebook BCC?",
    answer:
      "Guidebook dapat diunduh melalui tombol pendaftaran atau menu utama website.",
  },
];

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
