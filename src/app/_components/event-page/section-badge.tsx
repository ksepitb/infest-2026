import { gradientPinkWhiteText, pillCapsuleStyle } from "./styles";

export function SectionBadge({ children }: { children: string }) {
  return (
    <div className="flex justify-center">
      <div
        style={pillCapsuleStyle}
        className="flex h-[90px] w-full max-w-[648px] items-center justify-center px-6 lg:h-[133px]"
      >
        <span
          style={{ ...gradientPinkWhiteText, letterSpacing: "-1.6px" }}
          className="text-center font-poppins text-[40px] font-bold leading-none [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] lg:text-[80px]"
        >
          {children}
        </span>
      </div>
    </div>
  );
}
