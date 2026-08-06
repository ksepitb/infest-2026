"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

const COUNTDOWN_TARGET = new Date("2026-07-13T23:59:59+07:00");

const bccLinks = [
  { href: "/", label: "Home" },
  { href: "/#events", label: "Event" },
  { href: "/#erc", label: "ERC" },
  { href: "/bcc", label: "BCC" },
];

const timelineData = [
  { title: "BCC Registration", date: "5–13 Juli 2025" },
  { title: "BCC Registration", date: "5–13 Juli 2025" },
  { title: "BCC Registration", date: "5–13 Juli 2025" },
  { title: "BCC Registration", date: "5–13 Juli 2025" },
  { title: "BCC Registration", date: "5–13 Juli 2025" },
  { title: "BCC Registration", date: "5–13 Juli 2025" },
];

const faqData = [
  {
    question: "Orkhan",
    answer: "Muhammad Orkhan adalah Project Manager Website INFEST 2026.",
  },
  {
    question: "When yh?",
    answer:
      "Rangkaian acara INFEST 2026 akan berlangsung dari bulan Juli hingga November 2026. Pantau terus linimasa dan media sosial resmi kami untuk tanggal pendaftaran pasti!",
  },
  {
    question: "Bang orkhan apa rahasianya?",
    answer:
      "Rahasianya adalah kerja keras, dedikasi tanpa henti, riset mendalam, serta dukungan penuh dari seluruh panitia KSEP ITB dalam menyajikan festival investasi terbaik di Indonesia.",
  },
  {
    question: "Bang Orkhan bagi linkedin nya dong",
    answer:
      "Silakan terhubung secara profesional melalui LinkedIn Muhammad Orkhan untuk berdiskusi seputar finansial, pasar modal, dan kolaborasi event!",
  },
  {
    question: "Bang orkhan jomblo ga?",
    answer:
      "Pertanyaan menarik! Fokus utamanya saat ini adalah menyukseskan INFEST 2026. Temui Bang Orkhan secara langsung pada sesi seminar puncak 😉",
  },
];

const competitionContacts = [
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
  { name: "Muhammad Orkhan", phone: "08119900125", lineId: "orkhan12345678" },
];

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mb-12 flex items-center justify-center">
      {/* Glow bar behind */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-12 w-[200%] min-w-[800px] rounded-full opacity-100 sm:h-14 md:h-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(115,115,115,0) 0%, rgba(255,184,0,0.30) 15.87%, #E306D9 50%, rgba(255,184,0,0.30) 85.09%, rgba(115,115,115,0) 100%)",
          }}
        />
      </div>
      <h2
        className="relative z-10 text-center text-[40px] leading-none font-semibold text-white italic sm:text-[50px] md:text-[60px]"
        style={{
          textShadow:
            "0 0 8px rgba(0, 0, 0, 0.25), 0 0 32px rgba(255, 254, 255, 0.40), 0 0 40px rgba(255, 254, 255, 0.25)",
          letterSpacing: "-1.2px",
        }}
      >
        {children}
      </h2>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = COUNTDOWN_TARGET.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="mx-auto flex max-w-sm items-center justify-center rounded-[24px] px-8 py-6 shadow-[0_16px_48px_rgba(0,0,0,0.35)] sm:max-w-md sm:px-10 sm:py-8"
      style={{
        background:
          "linear-gradient(90deg, #380356 0%, #93009C 45%, #FFB800 100%)",
      }}
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-white sm:text-5xl">
            {timeLeft.hours}
          </div>
          <div className="mt-1 text-xs text-white/70 sm:text-sm">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white sm:text-5xl">
            {pad(timeLeft.minutes)}
          </div>
          <div className="mt-1 text-xs text-white/70 sm:text-sm">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white sm:text-5xl">
            {pad(timeLeft.seconds)}
          </div>
          <div className="mt-1 text-xs text-white/70 sm:text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default function BccPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-gradient-3 relative min-h-screen overflow-x-hidden text-white antialiased">
      {/* Background Glows — CSS radial-gradient blur (same technique as landing page) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Left top side glow */}
        <div className="absolute top-[5%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[#93009C]/30 blur-[140px] sm:h-[800px] sm:w-[800px]" />
        {/* Right top side glow */}
        <div className="absolute top-[10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#E306D9]/25 blur-[160px] sm:h-[800px] sm:w-[800px]" />
        {/* Left mid side glow */}
        <div className="absolute top-[35%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#93009C]/25 blur-[140px] sm:h-[700px] sm:w-[700px]" />

        {/* Accent blobs */}
        <div className="absolute top-[38%] right-[5%] h-[160px] w-[160px] rounded-full bg-[#E306D9]/20 blur-[60px] sm:h-[220px] sm:w-[220px]" />
        <div className="absolute top-[52%] left-[3%] h-[140px] w-[140px] rounded-full bg-[#E306D9]/15 blur-[50px] sm:h-[200px] sm:w-[200px]" />
        <div className="absolute top-[68%] right-[12%] h-[100px] w-[100px] rounded-full bg-[#E306D9]/15 blur-[40px] sm:h-[140px] sm:w-[140px]" />
        <div className="absolute top-[22%] left-[28%] h-[250px] w-[250px] rounded-full bg-[#93009C]/10 blur-[80px] sm:h-[350px] sm:w-[350px]" />
      </div>

      <Navbar activeHref="/bcc" links={bccLinks} registerHref="#" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-40 pb-12 text-center">
        <h1
          className="relative z-10 text-center text-[48px] leading-none font-bold not-italic sm:text-[64px] md:text-[80px] lg:text-[90px]"
          style={{
            textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
            letterSpacing: "-1.8px",
            background: "linear-gradient(180deg, #E306D9 20.19%, #FFFEFF 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Business Case Competition
        </h1>

        <p className="relative z-10 mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
          Business Case Competition merupakan kompetisi yang menguji kemampuan{" "}
          <span className="font-bold text-[#FFB800]">problem solving</span>{" "}
          <span className="font-bold text-[#E306D9]">
            dan analytical thinking
          </span>{" "}
          dalam konteks bisnis. Business Case Competition akan terbagi menjadi 3
          babak, yakni{" "}
          <span className="font-bold text-white italic">
            qualification round
          </span>
          ,{" "}
          <span className="font-bold text-[#E306D9] italic">
            preliminary stage
          </span>
          , dan <span className="font-bold text-white italic">final round</span>
          .
        </p>

        <Link
          className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#380356] via-[#E306D9] to-[#FFB800] px-8 py-3 text-lg font-bold text-white shadow-[0_0_25px_rgba(227,6,217,0.4)] transition hover:brightness-110"
          href="#"
        >
          Daftar Sekarang
          <span className="text-xl">→</span>
        </Link>
      </section>

      {/* Description of BCC */}
      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeader>Description of BCC</SectionHeader>
          <div
            className="rounded-3xl p-[2px] shadow-[0_0_30px_rgba(147,0,156,0.25)]"
            style={{
              background: "linear-gradient(180deg, #FFEED2, #683A9C)",
            }}
          >
            <div className="rounded-3xl bg-[#020003] px-8 py-10 text-center shadow-[inset_2px_2px_8px_rgba(255,255,255,0.08)] sm:px-14 sm:py-14">
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                INFEST 2025, dengan tema{" "}
                <span className="font-bold text-[#FFB800]">
                  &quot;Navigating the Future: Smart Investment in the Times of
                  Changes,&quot;
                </span>{" "}
                berfokus pada strategi investasi cerdas untuk menghadapi
                masa-masa penuh perubahan. Acara ini akan membekali peserta
                dengan pola pikir yang{" "}
                <span className="font-bold text-[#FFB800]">
                  proaktif dan tangguh
                </span>
                , serta membahas pemanfaatan teknologi seperti AI dalam
                mengambil keputusan investasi di tengah dinamika pasar dan
                krisis ekonomi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prize Pool */}
      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeader>Prize Pool</SectionHeader>
          <div className="flex flex-col items-center gap-6">
            {/* Juara 1 */}
            <div className="flex w-full max-w-xl flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div
                className="min-w-[160px] rounded-[100px] px-8 py-2.5 text-center"
                style={{
                  background:
                    "linear-gradient(241deg, rgba(227, 6, 217, 0.66) -31.06%, rgba(255, 184, 0, 0.66) 62.53%)",
                  boxShadow:
                    "0 4px 30px 0 #000, 4px 4px 30px 0 rgba(255, 255, 255, 0.90) inset",
                }}
              >
                <span className="text-lg font-bold text-white">Juara 1</span>
              </div>
              <span className="text-xl font-bold text-white sm:text-2xl">
                Rp5.000.000,00 + e-certificate
              </span>
            </div>
            {/* Juara 2 */}
            <div className="flex w-full max-w-xl flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div
                className="min-w-[160px] rounded-[100px] px-8 py-2.5 text-center"
                style={{
                  background:
                    "linear-gradient(262deg, rgba(144, 140, 159, 0.66) 6.73%, rgba(255, 255, 255, 0.66) 74.63%, rgba(78, 12, 81, 0.66) 112.81%)",
                  boxShadow:
                    "4px 4px 30px 0 #FFF inset, 0 0 8px 0 rgba(0, 0, 0, 0.50), 0 0 32px 0 rgba(0, 0, 0, 0.40), 0 0 40px 0 rgba(0, 0, 0, 0.60)",
                }}
              >
                <span className="text-lg font-bold text-white">Juara 2</span>
              </div>
              <span className="text-xl font-bold text-white sm:text-2xl">
                Rp3.000.000,00 + e-certificate
              </span>
            </div>
            {/* Juara 3 */}
            <div className="flex w-full max-w-xl flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div
                className="min-w-[160px] rounded-[100px] px-8 py-2.5 text-center"
                style={{
                  background:
                    "linear-gradient(262deg, rgba(179, 142, 81, 0.66) 5.7%, rgba(246, 220, 187, 0.66) 56.12%, rgba(153, 106, 205, 0.66) 113.41%)",
                  boxShadow:
                    "4px 4px 30px 0 #FFF inset, 0 0 8px 0 rgba(0, 0, 0, 0.50), 0 0 32px 0 rgba(0, 0, 0, 0.40), 0 0 40px 0 rgba(0, 0, 0, 0.60)",
                }}
              >
                <span className="text-lg font-bold text-white">Juara 3</span>
              </div>
              <span className="text-xl font-bold text-white sm:text-2xl">
                Rp2.000.000,00 + e-certificate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeader>Timeline</SectionHeader>
          <div className="relative mt-8">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-[#E306D9] shadow-[0_0_15px_#E306D9]" />

            <div className="space-y-10 sm:space-y-14">
              {timelineData.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4"
                  >
                    <div
                      className={`${isLeft ? "flex justify-end" : "invisible"}`}
                    >
                      {isLeft && (
                        <div className="bg-gradient-custom w-full max-w-[240px] rounded-2xl p-4 text-center shadow-[0_0_20px_rgba(227,6,217,0.3)] backdrop-blur-md sm:max-w-xs sm:p-5">
                          <h4 className="text-sm font-bold text-white sm:text-base">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs font-medium text-[#E5C7F7] sm:text-sm">
                            {item.date}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="relative flex justify-center">
                      <div className="z-10 h-4 w-4 rounded-full bg-[#E306D9] shadow-[0_0_15px_#EF35DB]" />
                    </div>

                    <div
                      className={`${!isLeft ? "flex justify-start" : "invisible"}`}
                    >
                      {!isLeft && (
                        <div className="bg-gradient-custom w-full max-w-[240px] rounded-2xl p-4 text-center shadow-[0_0_20px_rgba(227,6,217,0.3)] backdrop-blur-md sm:max-w-xs sm:p-5">
                          <h4 className="text-sm font-bold text-white sm:text-base">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs font-medium text-[#E5C7F7] sm:text-sm">
                            {item.date}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeader>Countdown</SectionHeader>
          <CountdownTimer />
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-16" id="faq">
        <div className="mx-auto max-w-4xl">
          <SectionHeader>Frequently Asked Questions</SectionHeader>
          <div className="flex flex-col gap-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden backdrop-blur-md transition-all duration-300"
                  style={{
                    borderRadius: isOpen ? "20px" : "100px",
                    background: "#6B0078",
                    boxShadow:
                      "inset 5px 6px 4.5px 0px rgba(255, 254, 255, 0.25)",
                  }}
                >
                  <button
                    className="flex w-full cursor-pointer items-center justify-between px-8 py-4 text-left text-base font-medium text-white sm:text-lg"
                    onClick={() => toggleFaq(index)}
                    type="button"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`text-infest-white ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                        />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-infest-white/10 border-t px-8 py-5 text-sm leading-relaxed text-[#E5C7F7] sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer competitionContacts={competitionContacts} />
    </main>
  );
}
