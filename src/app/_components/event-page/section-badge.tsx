import { gradientPinkWhiteText, pillCapsuleStyle } from "./styles";

export function SectionBadge({ children }: { children: string }) {
  return (
    <div className="flex justify-center">
      <div
        style={pillCapsuleStyle}
        className="flex h-[72px] w-full max-w-[800px] items-center justify-center px-8 sm:h-[90px] lg:h-[100px] lg:px-12"
      >
        <span
          style={{ ...gradientPinkWhiteText, letterSpacing: "-1.6px" }}
          className="font-poppins text-center text-[32px] leading-none font-bold [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-[44px] lg:text-[56px]"
        >
          {children}
        </span>
      </div>
    </div>
  );
}
