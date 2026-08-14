import Image from "next/image";
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
  priority?: boolean;
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
  priority = false,
}: DayCardProps) {
  const contentMaxWidth = boxed ? "760px" : "858px";

  const heading = (
    <h3 className="font-poppins w-full text-left text-[28px] leading-tight font-bold sm:text-[36px] md:text-[44px] lg:text-[56px]">
      <span
        style={{
          ...glowTextShadow,
          color: ACCENT_GOLD,
          letterSpacing: "-1.8px",
        }}
      >
        {dayLabel}
      </span>{" "}
      <span style={{ ...glowTextShadow, color: "#FFF", letterSpacing: "" }}>
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
        boxShadow: "0 0 8px 0 #380356, 0 0 32px 0 #380356, 0 0 40px 0 #380356",
      }}
    >
      <p
        style={{ textShadow: "0 4px 9.3px rgba(0,0,0,.25)" }}
        className="font-poppins text-center text-[15px] leading-[150%] font-semibold text-white lg:text-[18px]"
      >
        {description}
      </p>
    </div>
  ) : (
    <p
      style={{ textShadow: "0 4px 9.3px rgba(0,0,0,.25)" }}
      className="font-poppins w-full text-center text-base leading-[125%] font-semibold text-white lg:text-[22px]"
    >
      {description}
    </p>
  );

  const image = (
    <div className="relative mx-auto flex h-[280px] w-[220px] shrink-0 items-end justify-center sm:h-[320px] sm:w-[240px] lg:h-[460px] lg:w-[350px]">
      <div
        className="relative h-[72%] w-full rounded-[28px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)",

          backgroundImage: `
            linear-gradient(180deg, rgba(56, 3, 86, 0.00) -7.45%, rgba(19, 1, 29, 0.42) 25.27%, rgba(0, 0, 0, 0.60) 99.04%),
            url(/images/frame-speaker.png)
          `,
          backgroundPosition: "center, -0.131px -223.613px",
          backgroundSize: "cover, 100% 163.133%",
          backgroundRepeat: "no-repeat",

          border: "2px solid #FFFEFF",
          boxShadow: "0 0 15px rgba(255, 254, 255, 0.2)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 z-10 flex items-end justify-center overflow-hidden rounded-b-[28px]">
        <div
          className="relative h-[118%] w-[92%]"
          style={{ aspectRatio: "72 / 95" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            className="object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] filter"
          />
        </div>
      </div>
    </div>
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
