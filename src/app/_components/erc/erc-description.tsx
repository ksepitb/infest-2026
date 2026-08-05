import { SectionHeader } from "~/components/section-header";

export function ErcDescription() {
  return (
    <section
      className="mx-auto flex w-full max-w-[1371px] scroll-mt-32 flex-col items-center gap-10 px-4 py-10 md:px-0 lg:gap-[61px] lg:py-[80px]"
      id="erc-description"
    >
      <SectionHeader title="Description of" highlightText="ERC" />
      <div className="bg-[linear-gradient(180deg,#380356_0%,rgba(19,1,29,0.7)_64%,#000000_100%)]/60 flex w-full max-w-[1211px] items-center justify-center rounded-[28px] border border-white/10 px-6 py-8 backdrop-blur-md lg:px-[58px] lg:py-[54px]">
        <p className="font-poppins text-center text-base leading-[140%] font-semibold text-white md:text-xl lg:text-[24px] lg:leading-[125%]">
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
