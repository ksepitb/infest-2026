"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: NavLink[];
  registerHref?: string;
  logoSrc?: string;
  activeHref?: string;
}

const defaultLinks: NavLink[] = [
  { href: "/#home", label: "Home" },
  { href: "/events", label: "Event" },
  { href: "/erc", label: "ERC" },
  { href: "/bcc", label: "BCC" },
];

const MotionLink = motion.create(Link);

function MobileMenu({
  links,
  registerHref,
  isLinkActive,
}: {
  links: NavLink[];
  registerHref: string;
  isLinkActive: (href: string) => boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const menuVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 },
    show: reduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.2,
            staggerChildren: 0.05,
            delayChildren: 0.05,
          },
        },
    exit: reduceMotion
      ? { opacity: 0, transition: { duration: 0.1 } }
      : {
          opacity: 0,
          y: -8,
          scale: 0.98,
          transition: { duration: 0.15 },
        },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="cursor-pointer rounded-lg p-2 text-white transition-transform duration-300 hover:scale-110 active:scale-95"
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="bg-gradient-2 absolute top-full right-0 left-0 z-40 rounded-2xl px-6 py-4 shadow-[inset_2px_4px_4px_rgba(255,255,255,0.25),0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-md"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => {
                const isActive = isLinkActive(link.href);
                return (
                  <MotionLink
                    key={link.href}
                    variants={itemVariants}
                    className={`text-shadow-links py-3 text-lg font-bold transition-[transform,background-color] duration-300 ${
                      isActive
                        ? "text-highlight-gradient-dark-bg font-bold"
                        : "text-infest-white hover:text-highlight-gradient-dark-bg"
                    }`}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </MotionLink>
                );
              })}
              <MotionLink
                variants={itemVariants}
                className="shadow-box-shadow-inset bg-infest-white flex min-h-11 items-center justify-center rounded-full px-6 py-2 text-center text-lg font-extrabold tracking-wider transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-white/90 active:scale-95"
                href={registerHref}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-highlight-gradient-light-bg">Daftar</span>
              </MotionLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar({
  links = defaultLinks,
  registerHref = "/register",
  logoSrc = "/images/INFEST PUTIH.svg",
  activeHref,
}: NavbarProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isHidden, setIsHidden] = useState(false);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const onScroll = () => {
      setIsHidden(true);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => setIsHidden(false), 200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (typeof window === "undefined" || pathname !== "/") return;

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
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (activeHref) {
      return href === activeHref;
    }
    if (href === pathname) return true;
    if (pathname === "/" && href.startsWith("/#")) {
      return href.endsWith(`#${activeSection}`);
    }
    return false;
  };

  return (
    <header
      className={`bg-lighter-purple/80 fixed top-6 left-1/2 z-50 h-[75px] w-[calc(100%-2rem)] max-w-[900px] -translate-x-1/2 rounded-[100px] px-8 shadow-[inset_2px_4px_4px_rgba(255,255,255,0.25),0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-400 ${
        isHidden ? "-translate-y-[150%]" : "translate-y-0"
      }`}
    >
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
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                className={`text-shadow-links relative py-1 text-lg font-bold tracking-wide transition-[color,transform] duration-300 ${
                  isActive
                    ? "text-highlight-gradient-dark-bg"
                    : "hover:text-highlight-gradient-dark-bg text-white"
                }`}
                href={link.href}
              >
                {link.label}
                {isActive && (
                  <span className="bg-highlight-dark absolute right-0 bottom-0 left-0 h-[2px] rounded-full shadow-[0_0_8px_#E306D9]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 pr-4 md:flex">
          <Link
            className="text-md flex items-center justify-center rounded-[100px] bg-white px-6 py-2 font-extrabold tracking-wider shadow-[inset_-4px_5px_4.1px_rgba(0,0,0,0.25)] transition-[transform,background-color] transition-all duration-300 hover:scale-105 active:scale-95"
            href={registerHref}
          >
            <span className="text-highlight-gradient-light-bg">Daftar</span>
          </Link>
        </div>

        <MobileMenu
          isLinkActive={isLinkActive}
          links={links}
          registerHref={registerHref}
        />
      </div>
    </header>
  );
}
