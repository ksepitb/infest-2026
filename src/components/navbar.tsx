"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: NavLink[];
  registerHref?: string;
  logoSrc?: string;
}

const defaultLinks: NavLink[] = [
  { href: "/#home", label: "Home" },
  { href: "/events", label: "Event" },
  { href: "/#erc", label: "ERC" },
  { href: "/#bcc", label: "BCC" },
];

function MobileMenu({
  links,
  registerHref,
  activeSection,
}: {
  links: NavLink[];
  registerHref: string;
  activeSection: string;
  pathname: string;
}) {
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
        <div className="bg-gradient-2 absolute top-full right-0 left-0 z-40 rounded-3xl px-6 py-4 shadow-[inset_2px_4px_4px_rgba(255,255,255,0.25),0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-md">
          <nav className="flex flex-col gap-4">
            {links.map((link) => {
              const isActive = link.href.endsWith(`#${activeSection}`);
              return (
                <Link
                  key={link.href}
                  className={`text-shadow-links text-sm font-semibold transition ${
                    isActive
                      ? "text-highlight-gradient-dark-bg"
                      : "text-infest-white hover:text-highlight-gradient-dark-bg"
                  }`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              className="text-dark-purple rounded-full bg-white px-6 py-2 text-center text-xs font-black tracking-wider uppercase transition hover:bg-white/90"
              href={registerHref}
              onClick={() => setIsOpen(false)}
            >
              DAFTAR
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export function Navbar({
  links = defaultLinks,
  registerHref = "#register",
  logoSrc = "/images/INFEST PUTIH.svg",
}: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = ["home", "events", "erc", "bcc"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-lighter-purple fixed top-6 left-1/2 z-50 h-[75px] w-[calc(100%-2rem)] max-w-[900px] -translate-x-1/2 rounded-[100px] px-8 shadow-[inset_2px_4px_4px_rgba(255,255,255,0.25),0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[50px] transition-all">
      <div className="flex h-full items-center justify-between">
        <Link className="flex items-center gap-2 pl-4" href="/#home">
          <Image
            alt="INFEST 2026"
            className="h-6 w-auto object-contain"
            height={26}
            priority
            src={logoSrc}
            width={120}
          />
        </Link>

        <nav className="hidden items-center gap-18 md:flex">
          {links.map((link) => {
            const isActive =
            pathname === "/events"
            ? link.href === "/events"
            : link.href.endsWith(`#${activeSection}`);
            return (
              <Link
                key={link.href}
                className={`text-shadow-links relative py-1 text-lg font-bold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-highlight-gradient-dark-bg"
                    : "hover:text-highlight-gradient-dark-bg text-white"
                }`}
                href={link.href}
              >
                {link.label}
                {isActive && (
                  <span className="bg-highlight-dark absolute right-0 bottom-0 left-0 h-[2px] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 pr-4 md:flex">
          <Link
            className="text-md flex items-center justify-center rounded-[100px] bg-white px-6 py-2 font-black tracking-wider shadow-[inset_-4px_5px_4.1px_rgba(0,0,0,0.25)] transition hover:bg-white/50"
            href={registerHref}
          >
            <span className="text-highlight-gradient-light-bg uppercase">
              DAFTAR
            </span>
          </Link>
        </div>

        <MobileMenu
          pathname={pathname}
          activeSection={activeSection}
          links={links}
          registerHref={registerHref}
        />
      </div>
    </header>
  );
}
