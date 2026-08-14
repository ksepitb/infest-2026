import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { GradientDivider } from "@/app/_components/event-page/theme-divider";

export function ErcDescription() {
  return (
    <section
      className="relative mx-auto flex w-full max-w-6xl scroll-mt-32 flex-col items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:gap-[61px] lg:px-8 lg:py-8"
      id="erc-description"
    >
      {/* Ornament 2 centered behind heading */}
      <GradientDivider>What is ERC? </GradientDivider>
      <div
        className="max-w-4xl rounded-3xl p-[2px] shadow-[0_0_30px_rgba(147,0,156,0.25)]"
        style={{
          background: "linear-gradient(180deg, #FFEED2, #683A9C)",
        }}
      >
        <div className="rounded-3xl bg-[#020003] px-8 py-10 text-center shadow-[inset_2px_2px_8px_rgba(255,255,255,0.08)] sm:px-14 sm:py-14">
          <p className="text-base leading-relaxed text-white/90 sm:text-lg">
            INFEST 2025, dengan tema{" "}
            <span className="text-golden-gradient">
              &quot;Navigating the Future: Smart Investment in the Times of
              Changes,&quot;
            </span>{" "}
            berfokus pada strategi investasi cerdas untuk menghadapi masa-masa
            penuh perubahan. Acara ini akan membekali peserta dengan pola pikir
            yang{" "}
            <span className="text-golden-gradient">proaktif dan tangguh</span>,
            serta membahas pemanfaatan teknologi seperti AI dalam mengambil
            keputusan investasi di tengah dinamika pasar dan krisis ekonomi.
          </p>
        </div>
      </div>
    </section>
  );
}
