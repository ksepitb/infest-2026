"use client";

import { useEffect, useState } from "react";

import { SectionHeader } from "~/components/section-header";

/** ISO 8601 target date — ERC registration closes */
const TARGET_DATE = new Date("2026-09-01T23:59:59+07:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function computeTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-lighter-purple flex h-16 w-16 items-center justify-center rounded-xl shadow-[inset_2px_2px_8px_rgba(255,255,255,0.12),0_0_20px_rgba(147,0,156,0.25)] sm:h-20 sm:w-20 md:h-24 md:w-24">
        <span className="text-2xl font-black text-white tabular-nums sm:text-3xl md:text-4xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] font-semibold tracking-widest text-white/60 uppercase sm:text-xs">
        {label}
      </span>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <span className="text-infest-pink mb-7 text-2xl font-black sm:text-3xl md:mb-9 md:text-4xl">
      :
    </span>
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
    <section className="relative z-10 px-6 py-20" id="erc-countdown">
      <SectionHeader title="Countdown" />
      <div className="mx-auto max-w-3xl text-center">
        {/* Timer Display */}
        <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-5">
          <CountdownUnit label="Days" value={timeLeft.days} />
          <CountdownSeparator />
          <CountdownUnit label="Hours" value={timeLeft.hours} />
          <CountdownSeparator />
          <CountdownUnit label="Minutes" value={timeLeft.minutes} />
          <CountdownSeparator />
          <CountdownUnit label="Seconds" value={timeLeft.seconds} />
        </div>

        {/* Target label */}
        <p className="mt-8 text-xs text-white/40">
          Menuju penutupan pendaftaran ERC · 1 September 2026
        </p>
      </div>
    </section>
  );
}
