"use client";

import Image from "next/image";

export interface ContactInfo {
  name: string;
  phone: string;
  lineId: string;
}

interface FooterProps {
  eventContacts?: ContactInfo[];
  competitionContacts?: ContactInfo[];
  linkedinUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  copyrightText?: string;
}

const defaultEventContacts: ContactInfo[] = [
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
];

const defaultCompetitionContacts: ContactInfo[] = [
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
];

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/images/whatsapp-icon.png"
      alt="WhatsApp"
      width={16}
      height={16}
      className={className}
    />
  );
}

function LineIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/images/line-logo.png"
      alt="Line"
      width={16}
      height={16}
      className={className}
    />
  );
}

export function Footer({
  eventContacts = defaultEventContacts,
  competitionContacts = defaultCompetitionContacts,
  linkedinUrl = "#",
  instagramUrl = "#",
  tiktokUrl = "#",
  copyrightText = "© INFEST ITB 2026",
}: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-white/50 px-6 pt-16 pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Social Media Column */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold tracking-wide sm:text-3xl">
              <span className="text-highlight-gradient-dark-horizontal bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(240,74,201,0.4)]">
                Social Media
              </span>
            </h3>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Follow us on social media to find out the latest updates on our
              event
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center justify-center gap-4 text-white/70">
              {/* LinkedIn */}
              <a
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center transition-colors duration-200 hover:text-white"
                href={linkedinUrl}
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:text-white"
                href={instagramUrl}
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center transition-colors duration-200 hover:text-white"
                href={tiktokUrl}
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl font-bold tracking-wide sm:text-3xl">
              <span className="text-highlight-gradient-dark-horizontal drop-shadow-[0_0_10px_rgba(240,74,201,0.4)]">
                Contact Information
              </span>
            </h3>

            <div className="mt-6 grid w-full max-w-lg grid-cols-2 gap-x-16 gap-y-8 text-xs text-white/90 sm:text-sm">
              {/* Event Contacts */}
              <div className="text-left">
                <h4 className="mb-4 font-bold text-infest-white text-xl">Event</h4>
                <div className="space-y-4">
                  {eventContacts.map((contact, index) => (
                    <div key={index} className="space-y-1">
                      <p className="font-semibold text-white">{contact.name}</p>
                      <p className="flex items-center justify-start gap-1.5 text-white/70">
                        <WhatsappIcon className="h-4 w-4 shrink-0 text-white/70" />
                        <span>{contact.phone}</span>
                      </p>
                      <p className="flex items-center justify-start gap-1.5 text-white/70">
                        <LineIcon className="h-4 w-4 shrink-0 text-white/70" />
                        <span>{contact.lineId}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competition Contacts */}
              <div className="text-right">
                <h4 className="mb-4 font-bold text-infest-white text-xl">Competition</h4>
                <div className="space-y-4">
                  {competitionContacts.map((contact, index) => (
                    <div key={index} className="space-y-1">
                      <p className="font-semibold text-white">{contact.name}</p>
                      <p className="flex items-center justify-end gap-1.5 text-white/70">
                        <span>{contact.phone}</span>
                        <WhatsappIcon className="h-4 w-4 shrink-0 text-white/70" />
                      </p>
                      <p className="flex items-center justify-end gap-1.5 text-white/70">
                        <span>{contact.lineId}</span>
                        <LineIcon className="h-4 w-4 shrink-0 text-white/70" />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/60">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
}
