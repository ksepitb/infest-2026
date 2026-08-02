import { SectionHeader } from "~/components/section-header";

export function ErcDescription() {
  return (
    <section className="relative z-10 px-6 py-20" id="erc-description">
      <SectionHeader title="Description of ERC" />
      <div className="mx-auto max-w-3xl">
        {/* Content Card */}
        <div className="rounded-3xl bg-[#1A0030] p-8 shadow-[inset_4px_4px_12px_rgba(255,255,255,0.07),0_0_40px_rgba(107,0,120,0.3)] sm:p-10 md:p-12">
          <p className="text-sm leading-loose text-white/85 sm:text-base md:text-[1.05rem]">
            INFEST 2025, dengan tema{" "}
            <strong className="text-infest-pink font-semibold">
              &ldquo;Navigating the Future: Smart Investment in the Times of
              Changes,&rdquo;
            </strong>{" "}
            berfokus pada strategi investasi cerdas untuk menghadapi masa-masa
            penuh perubahan. Acara ini akan membekali peserta dengan pola pikir
            yang{" "}
            <strong className="text-accent-color font-semibold">
              proaktif dan tangguh
            </strong>
            , serta membahas pemanfaatan teknologi seperti AI dalam mengambil
            keputusan investasi di tengah dinamika pasar dan krisis ekonomi.
          </p>
        </div>
      </div>
    </section>
  );
}
