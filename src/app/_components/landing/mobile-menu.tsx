"use client";

import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#events", label: "Event" },
  { href: "#erc", label: "ERC" },
  { href: "#bcc", label: "BCC" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle menu"
        className="rounded-lg p-2 text-white hover:bg-white/10"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          ) : (
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 left-0 z-40 border-b border-[#E306D9]/20 bg-[#0A0012]/95 px-6 py-4 shadow-xl backdrop-blur-md">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#E306D9]"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="rounded-full bg-white px-6 py-2 text-center text-xs font-black tracking-wider text-[#140228] uppercase transition hover:bg-white/90"
              href="#register"
              onClick={() => setIsOpen(false)}
            >
              DAFTAR
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
