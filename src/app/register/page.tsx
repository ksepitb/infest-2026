import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import type { ContactInfo } from "~/components/footer";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export const metadata: Metadata = {
  title: "Registration | INFEST 2026",
  description:
    "Daftar untuk Business Case Competition atau Equity Research Competition INFEST 2026.",
  openGraph: {
    title: "Registration | INFEST 2026",
    description:
      "Pendaftaran kompetisi INFEST 2026 — Business Case Competition dan Equity Research Competition.",
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

function RegistrationButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="bg-gradient-6 shadow-box-shadow-inset text-infest-white relative mb-24 flex min-h-[80px] w-full items-center justify-center rounded-full px-6 py-5 text-center text-base font-bold transition hover:brightness-110 md:text-[20px]"
      href={href}
    >
      {label}
    </Link>
  );
}

export default function RegisterPage() {
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
          className="absolute top-[-40%] left-[-35%] w-[1400px] opacity-80 backdrop-blur-lg"
          height={900}
          src="/images/registration/regis-circle-left.png"
          width={900}
        />

        {/* Right circular ring ornament */}
        <Image
          alt=""
          aria-hidden="true"
          className="absolute top-[-10%] right-[-45%] w-[2400px] opacity-80 backdrop-blur-lg"
          height={2400}
          src="/images/registration/regis-circle-right.png"
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
          className="absolute bottom-[30%] left-[-40px] w-[800px] rotate-[-45deg] opacity-35 mix-blend-screen md:w-[420px]"
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

      {/* Hero / Registration selection */}
      <section className="relative z-10 mt-24 flex flex-1 flex-col items-center justify-center px-6 pt-36 pb-24 text-center">
        <h1 className="glow-text-1 text-5xl font-bold text-white md:text-[90px]">
          Registration
        </h1>

        <p className="mt-24 text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
          Select your competition
        </p>

        <div className="glow-text-3 mt-12 grid w-full max-w-3xl gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 md:gap-10">
          <RegistrationButton
            href="/register/bcc"
            label="Business Case Competition"
          />
          <RegistrationButton
            href="/register/erc"
            label="Equity Research Competition"
          />
        </div>
      </section>

      <div className="relative z-10 bg-black">
        <Footer
          competitionContacts={competitionContacts}
          eventContacts={eventContacts}
        />
      </div>
    </main>
  );
}
