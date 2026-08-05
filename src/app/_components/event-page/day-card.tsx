import type { ReactNode } from "react";
import { ACCENT_GOLD, glowTextShadow } from "./styles";

type DayCardProps = {
  dayLabel: string;
  title: string;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  boxed?: boolean;
};

export function Highlight({ children }: { children: ReactNode }) {
  return <span style={{ color: ACCENT_GOLD }}>{children}</span>;
}

export function DayCard({
  dayLabel,
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  boxed = false,
}: DayCardProps) {
  const contentMaxWidth = boxed ? "760px" : "858px";

  const heading = (
    <h3 className="w-full text-left font-poppins font-bold leading-tight">
      <span
        style={{ ...glowTextShadow, color: ACCENT_GOLD, letterSpacing: "-1.8px" }}
        className="text-[28px] lg:text-[56px]"
      >
        {dayLabel}
      </span>{" "}
      <span
        style={{ ...glowTextShadow, color: "#FFF", letterSpacing: "-1.8px" }}
        className="text-[28px] lg:text-[56px]"
      >
        - {title}
      </span>
    </h3>
  );

  const paragraph = boxed ? (
    <div
      className="flex w-full items-center justify-center rounded-[24px] px-[32px] py-[28px]"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "linear-gradient(180deg, rgba(56, 3, 86, 0.60) -4.56%, rgba(19, 1, 29, 0.42) 64.79%, rgba(0, 0, 0, 0.60) 104.56%)",
        boxShadow:
          "0 0 8px 0 #380356, 0 0 32px 0 #380356, 0 0 40px 0 #380356",
      }}
    >
      <p
        style={{ textShadow: "0 4px 9.3px rgba(0,0,0,.25)" }}
        className="text-center font-poppins text-[15px] font-semibold leading-[150%] text-white lg:text-[18px]"
      >
        {description}
      </p>
    </div>
  ) : (
    <p
      style={{ textShadow: "0 4px 9.3px rgba(0,0,0,.25)" }}
      className="w-full text-center font-poppins text-base font-semibold leading-[125%] text-white lg:text-[22px]"
    >
      {description}
    </p>
  );

  const image = (
    <div
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundColor: "rgba(0,0,0,0.3)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
      role="img"
      aria-label={imageAlt}
      className="aspect-[72/95] w-[220px] shrink-0 rounded-[24px] border-2 border-white/80 shadow-lg lg:w-[320px]"
    />
  );

  const textColumn = (
    <div
      className="flex w-full flex-col items-start gap-4"
      style={{ maxWidth: contentMaxWidth }}
    >
      {heading}
      {paragraph}
    </div>
  );

  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-center ${
        imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {textColumn}
      {image}
    </div>
  );
}