import { glowTextShadow, gradientDividerBar } from "./styles";

export function GradientDivider({ children }: { children: string }) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div
        style={gradientDividerBar}
        className="h-[50px] w-full max-w-[1574px] lg:h-[98px]"
      />
      <span
        style={{ ...glowTextShadow, color: "#FFF", letterSpacing: "-1.2px" }}
        className="absolute px-4 text-center font-poppins text-[28px] font-semibold italic leading-none lg:text-[60px]"
      >
        {children}
      </span>
    </div>
  );
}
