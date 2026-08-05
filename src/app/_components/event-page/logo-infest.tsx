"use client";

import Image from "next/image";

export function HeaderLogo() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
      {/* 1. LOGO GABUNGAN INFEST + ARROW + 2026 */}
      <div className="filter drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
        <Image
          src="/images/INFEST PUTIH.svg" // <-- SESUAIKAN NAMA FILE DAN LOKASI GAMBAR ANDA DI SINI
          alt="INFEST 2026 Logo"
          width={450}
          height={150}
          priority
          className="h-auto w-[280px] object-contain md:w-[380px] lg:w-[450px]"
        />
      </div>

      {/* 2. TEKS PRE-EVENT & MAIN EVENT */}
      <div className="flex flex-col justify-center text-center lg:text-left">
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(227, 6, 217, 0.6)",
          }}
          className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[56px]"
        >
          <span className="block whitespace-nowrap">Pre-Event &amp;</span>
          <span className="block whitespace-nowrap">Main Event</span>
        </h1>
      </div>
    </div>
  );
}