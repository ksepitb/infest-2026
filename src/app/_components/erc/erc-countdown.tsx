"use client";

import { useEffect, useState } from "react";

import { SectionHeader } from "~/components/section-header";

/** ISO 8601 target date — ERC registration closes */
const TARGET_DATE = new Date("2026-09-01T23:59:59+07:00");

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function computeTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
  const totalHours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return {
    hours: totalHours,
    minutes,
    seconds,
  };
}

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex min-w-[80px] shrink-0 flex-col items-center justify-center gap-1">
      <span
        suppressHydrationWarning
        className="font-poppins text-4xl leading-none font-bold tracking-tight text-white tabular-nums drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] sm:text-5xl lg:text-6xl"
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-poppins text-xs leading-tight font-medium text-white/80 sm:text-sm lg:text-base">
        {label}
      </span>
    </div>
  );
}

export function ErcCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(computeTimeLeft);

  useEffect(() => {
    const timer: ReturnType<typeof setInterval> = setInterval(() => {
      setTimeLeft(computeTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative z-10 mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:gap-[60px] lg:px-8 lg:py-24"
      id="erc-countdown"
    >
      <SectionHeader title="Registration" highlightText="Countdown" />
      <div className="flex w-full flex-col items-center gap-4 break-words">
        <div className="flex min-h-[180px] w-full max-w-[462px] items-center justify-between gap-4 rounded-[26.2px] border border-white/30 bg-[linear-gradient(70deg,#FFB800_0%,rgba(147,0,156,0.8)_54%,#380356_100%)] p-6 text-center shadow-[0_24px_74px_rgba(151,71,255,0.32)] lg:h-[207px] lg:gap-[52px] lg:p-[52px]">
          <CountdownUnit label="Hours" value={timeLeft.hours} />
          <CountdownUnit label="Minutes" value={timeLeft.minutes} />
          <CountdownUnit label="Seconds" value={timeLeft.seconds} />
        </div>
        <p className="font-poppins text-xs text-white/40">
          Menuju penutupan pendaftaran ERC · 1 September 2026
        </p>
      </div>
    </section>
  );
}
