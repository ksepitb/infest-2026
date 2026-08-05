import type { ReactNode } from "react";
import { ACCENT_GOLD, glowTextShadow, descriptionBoxStyle } from "./styles";

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
  const heading = (
    <h3 className="text-center font-poppins font-bold leading-none">
        <span
            style={{ ...glowTextShadow, color: ACCENT_GOLD, letterSpacing: "-1.8px" }}
            className="text-[28px] lg:text-[64px]"
        >
        {dayLabel}
      </span>{" "}
      <span
        style={{ ...glowTextShadow, color: "#FFF", letterSpacing: "-1.8px" }}
        className="text-[28px] lg:text-[64px]"
      >
        - {title}
      </span>
    </h3>
  );

    const paragraph = boxed ? (
    <div
        className="mx-auto flex w-full max-w-[760px] items-center justify-center rounded-[18px] px-[36px] py-[24px]"
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
        className="w-[620px] text-center font-poppins text-[20px] font-semibold leading-[140%] text-white"
        >
        {description}
        </p>
    </div>
    ) : (
    <p
        style={{ textShadow: "0 4px 9.3px rgba(0,0,0,.25)" }}
        className="mx-auto max-w-[858px] text-center font-poppins text-base font-semibold leading-[125%] text-white lg:text-[24px]"
    >
        {description}
    </p>
    );

  const image = (
    <div
      style={{
        aspectRatio: "72 / 95",
        backgroundImage: `url(${imageSrc})`,
        backgroundColor: "lightgray",
        backgroundSize: "cover",
        backgroundPosition: "50%",
      }}
      role="img"
      aria-label={imageAlt}
      className="w-[180px] shrink-0 rounded-2xl lg:w-[260px]"
    />
  );


    const content = (
    <div className="flex flex-col items-center gap-8">
        {heading}

        <div
        className={`flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center ${
            imagePosition === "right" ? "lg:flex-row-reverse" : ""
        }`}
        >
        {image}
        {paragraph}
        </div>
    </div>
    );

    return content;
}
