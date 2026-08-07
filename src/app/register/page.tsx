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
      className="relative flex min-h-[80px] w-full items-center justify-center rounded-full px-6 py-5 text-center text-base font-bold text-white shadow-[0_0_40px_rgba(147,0,156,0.65),0_0_80px_rgba(227,6,217,0.55),0_0_120px_rgba(255,184,0,0.40)] transition hover:brightness-110 sm:min-h-[96px] sm:px-8 sm:text-lg md:text-xl"
      href={href}
      style={{
        background:
          "linear-gradient(90deg, #380356 0%, #93009C 25%, #E306D9 55%, #FFB800 100%)",
      }}
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
        {/* Large warm magenta glow on the right */}
        <div className="absolute top-[-5%] right-[-20%] h-[800px] w-[800px] rounded-full bg-[#E306D9]/35 blur-[180px] sm:h-[1000px] sm:w-[1000px]" />
        <div className="absolute top-[30%] right-[-15%] h-[700px] w-[700px] rounded-full bg-[#E306D9]/30 blur-[200px] sm:h-[900px] sm:w-[900px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[#93009C]/30 blur-[180px] sm:h-[800px] sm:w-[800px]" />

        {/* Cool purple glow on the top-left */}
        <div className="absolute top-[-10%] left-[-15%] h-[600px] w-[600px] rounded-full bg-[#93009C]/30 blur-[160px] sm:h-[800px] sm:w-[800px]" />

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
          className="absolute top-[18%] -left-[220px] w-[620px] opacity-100 sm:-left-[260px] sm:w-[720px] md:-left-[220px] md:w-[820px] lg:-left-[160px] lg:w-[900px]"
          height={900}
          src="/images/registration/regis-circle-left.png"
          width={900}
        />

        {/* Right circular ring ornament */}
        <Image
          alt=""
          aria-hidden="true"
          className="absolute top-[12%] -right-[320px] w-[800px] opacity-100 sm:-right-[380px] sm:w-[960px] md:-right-[340px] md:w-[1080px] lg:-right-[260px] lg:w-[1200px]"
          height={1200}
          src="/images/registration/regis-circle-right.png"
          width={1200}
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
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-36 pb-24 text-center">
        <h1
          className="glow-text-1 text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl"
          style={{
            textShadow:
              "0 0 8px rgba(0,0,0,0.25), 0 0 40px rgba(255,254,255,0.80), 0 0 80px rgba(255,254,255,0.65), 0 0 120px rgba(255,254,255,0.45), 0 0 160px rgba(227,6,217,0.55), 0 0 200px rgba(147,0,156,0.40)",
          }}
        >
          Registration
        </h1>

        <p className="mt-6 text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
          Select your competition
        </p>

        <div className="mt-12 grid w-full max-w-3xl gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 md:gap-10">
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
