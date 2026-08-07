import { SectionHeader } from "~/components/section-header";

export function ErcDescription() {
  return (
    <section
      className="mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:gap-[61px] lg:px-8 lg:py-24"
      id="erc-description"
    >
      <SectionHeader title="Description of" highlightText="ERC" />
      <div className="flex w-full max-w-[1211px] items-center justify-center rounded-[28px] border border-[#E306D9]/30 bg-[#090114]/90 px-6 py-8 shadow-[0_4px_24px_rgba(0,0,0,0.6)] backdrop-blur-md lg:px-[58px] lg:py-[54px]">
        <p className="font-poppins w-full max-w-full text-center text-base leading-[140%] font-semibold break-words text-white md:text-xl lg:text-[24px] lg:leading-[125%]">
          INFEST 2026, dengan tema{" "}
          <span className="font-bold text-[#FFB800]">
            &quot;Navigating the Future: Smart Investment in the Times of
            Changes,&quot;
          </span>{" "}
          berfokus pada strategi investasi cerdas untuk menghadapi masa-masa
          penuh perubahan. Acara ini akan membekali peserta dengan pola pikir
          yang{" "}
          <span className="font-bold text-[#FFB800]">proaktif dan tangguh</span>
          , serta membahas pemanfaatan teknologi seperti AI dalam mengambil
          keputusan investasi di tengah dinamika pasar dan krisis ekonomi.
        </p>
      </div>
    </section>
  );
}
