"use client";

import Image from "next/image";

import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#events", label: "Event" },
  { href: "#erc", label: "ERC" },
  { href: "#bcc", label: "BCC" },
];

export function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 rounded-full border border-[#F04AC9]/40 bg-[#140228]/85 px-6 py-2.5 shadow-[0_0_25px_rgba(240,74,201,0.25)] backdrop-blur-xl transition-all">
      <div className="flex items-center justify-between">
        <a className="flex items-center gap-2" href="#home">
          <Image
            alt="INFEST 2026"
            className="h-6 w-auto object-contain"
            height={26}
            priority
            src="/images/INFEST PUTIH.svg"
            width={120}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-sm font-bold text-white/90 transition hover:text-[#F04AC9]"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            className="rounded-full bg-white px-6 py-1.5 text-xs font-black tracking-wider text-[#140228] uppercase shadow-[0_0_15px_rgba(255,255,255,0.4)] transition hover:bg-white/90"
            href="#register"
          >
            DAFTAR
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
