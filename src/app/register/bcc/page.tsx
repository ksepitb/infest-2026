import type { Metadata } from "next";
import Image from "next/image";

import type { ContactInfo } from "~/components/footer";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

import { RulesCard } from "../../_components/register/rules-card";

export const metadata: Metadata = {
  title: "Ketentuan Umum BCC | INFEST 2026",
  description: "Ketentuan umum Business Case Competition INFEST 2026.",
  openGraph: {
    title: "Ketentuan Umum BCC | INFEST 2026",
    description:
      "Baca ketentuan umum Business Case Competition INFEST 2026 sebelum mendaftar.",
    siteName: "INFEST 2026",
  },
};

const registerLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Event" },
  { href: "/erc", label: "ERC" },
  { href: "/bcc", label: "BCC" },
];

const eventContacts: ContactInfo[] = [
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
];

const competitionContacts: ContactInfo[] = [
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
];

const bccRules = [
  "Tim (kelompok) beranggotakan 2-3 orang mahasiswa aktif program Diploma/S1 di Indonesia. Setiap anggota tim dapat berasal dari universitas yang sama maupun berbeda.",
  "Setiap anggota tim harus memiliki Kartu Tanda Mahasiswa (KTM) yang akan dikumpulkan melalui form registrasi.",
  "Setiap peserta tidak diperbolehkan berada pada lebih dari 1 tim.",
  "Anggota dalam tim tidak boleh digantikan oleh siapa pun dengan alasan apa pun.",
  "1 tim hanya boleh mengirimkan 1 karya.",
  "Peserta wajib melengkapi semua dokumen yang dibutuhkan untuk registrasi.",
  "Peserta wajib melakukan registrasi dan membayar biaya pendaftaran sesuai mekanisme pendaftaran",
  "Peserta wajib mengikuti akun Instagram @casecollaborator (blm ada) dan @infest.bdg untuk mendapatkan informasi mengenai perlombaan.",
  "Peserta wajib mem-posting twibbon yang disediakan oleh panitia sebagai syarat registrasi.",
  "Peserta wajib membagikan poster lomba pada story akun instagram masing-masing dan men-tag @infest.bdg sebagai syarat registrasi.",
  "Peserta wajib menandai 3 teman pada kolom komentar di postingan poster yang ada di akun Instagram @infest.bdg.",
  "Peserta tidak diperbolehkan menuliskan nama institusi asal peserta pada karya yang dibuat.",
  "Peserta tidak diperbolehkan untuk menyebarkan case perusahaan kepada pihak eksternal yang tidak mengikuti perlombaan Business Case Competition ini.",
  "Karya yang dikirimkan oleh peserta merupakan karya orisinal yang belum pernah dipublikasikan di media atau platform manapun.",
  "Seluruh peserta berhak mengikuti workshop yang telah difasilitasi oleh panitia.",
  "Peserta wajib mengikuti ketentuan panitia dan keputusan panitia tidak dapat diganggu gugat.",
];

export default function BccRulesPage() {
  return (
    <main className="bg-gradient-3 relative flex min-h-screen flex-col overflow-x-hidden text-white antialiased">
      {/* Background glows and ornaments */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Scattered dotted ornament */}
        <Image
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 h-full w-auto opacity-40 mix-blend-screen"
          height={1000}
          src="/images/registration/dots.svg"
          width={800}
        />

        {/* Left circular ring ornament */}
        <Image
          alt=""
          aria-hidden="true"
          className="absolute top-[-33%] left-[-35%] w-[1400px] opacity-80 backdrop-blur-lg"
          height={900}
          src="/images/registration/regis-circle-left.png"
          width={900}
        />

        <Image
          alt=""
          aria-hidden="true"
          className="absolute top-[20%] right-[-3%] w-[2400px] opacity-80 backdrop-blur-lg"
          height={2400}
          src="/images/ornament1-right.png"
          width={2400}
        />

        {/* Top Right Dotted matrix SVG ornament */}
        <Image
          alt=""
          className="absolute top-[-5%] right-[-2%] w-[800px] rotate-135 opacity-35 mix-blend-screen md:w-[420px]"
          height={800}
          src="/images/dotted1.svg"
          width={800}
        />

        {/* Bottom Left Dotted matrix SVG ornament */}
        <Image
          alt=""
          className="absolute bottom-[20%] left-[-40px] w-[800px] rotate-[-45deg] opacity-35 mix-blend-screen md:w-[420px]"
          height={800}
          src="/images/dotted1.svg"
          width={800}
        />

        {/* Center vignette to deepen contrast like the Figma */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.35)_0%,transparent_65%)]" />
      </div>

      <Navbar
        activeHref="/register"
        links={registerLinks}
        registerHref="/register"
      />

      <RulesCard rules={bccRules} title="Ketentuan Umum ERC" />

      <div className="relative z-10 bg-black">
        <Footer
          competitionContacts={competitionContacts}
          eventContacts={eventContacts}
        />
      </div>
    </main>
  );
}
