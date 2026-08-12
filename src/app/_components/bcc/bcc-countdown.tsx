"use client";

import { useEffect, useState } from "react";
import { GradientDivider } from "~/app/_components/event-page/theme-divider";

/** ISO 8601 target date — BCC registration closes */
const TARGET_DATE = new Date("2026-07-13T23:59:59+07:00");

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

export function BccCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(computeTimeLeft);

  useEffect(() => {
    const timer: ReturnType<typeof setInterval> = setInterval(() => {
      setTimeLeft(computeTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative z-10 mx-auto flex w-full max-w-[1000px] scroll-mt-32 flex-col items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:gap-[60px] lg:px-8 lg:py-24"
      id="bcc-countdown"
    >
      <GradientDivider>Countdown</GradientDivider>
      <div className="flex w-full flex-col items-center gap-4 break-words">
        <div className="bg-gradient-6 glow-box-golden flex min-h-[180px] w-full max-w-[462px] items-center justify-between gap-4 rounded-[26.2px] p-6 text-center lg:h-[200px] lg:gap-[52px] lg:p-10">
          <CountdownUnit label="Hours" value={timeLeft.hours} />
          <CountdownUnit label="Minutes" value={timeLeft.minutes} />
          <CountdownUnit label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  );
}
