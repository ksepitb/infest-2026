import { FaqAccordion, type FaqItem } from "~/components/faq-accordion";
import { SectionHeader } from "~/components/section-header";

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

/**
 * ErcFaq — RSC wrapper that provides ERC-specific FAQ data to the shared
 * FaqAccordion client component. The RSC handles static data; the accordion
 * interaction state lives entirely within FaqAccordion ('use client').
 */
export function ErcFaq() {
  return (
    <section className="relative z-10 px-6 py-20" id="erc-faq">
      <SectionHeader title="Frequently Asked Questions" />
      <div className="mx-auto max-w-4xl">
        {/* Client component — receives static data as props */}
        <FaqAccordion items={ercFaqItems} />
      </div>
    </section>
  );
}
