import { gradientPinkWhiteText, pillCapsuleStyle } from "./styles";

export function SectionBadge({ children }: { children: string }) {
  return (
    <div className="mt-12 flex justify-center">
      <div
        style={pillCapsuleStyle}
        className="flex h-[72px] w-full max-w-[800px] items-center justify-center rounded-full px-8 sm:h-[90px] lg:h-[100px] lg:px-12"
      >
        <span className="font-poppins text-highlight-gradient-dark-bg text-shadow-links text-center text-[32px] font-bold sm:text-[44px] lg:text-[56px]">
          {children}
        </span>
      </div>
    </div>
  );
}
