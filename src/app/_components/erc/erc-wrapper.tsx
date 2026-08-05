import Image from "next/image";
import { ErcCountdown } from "./erc-countdown";
import { ErcDescription } from "./erc-description";
import { ErcFaq } from "./erc-faq";
import { ErcHero } from "./erc-hero";
import { ErcPrizePool } from "./erc-prize-pool";
import { ErcTimeline } from "./erc-timeline";

export function ErcWrapper() {
  return (
    <main className="relative block min-h-screen w-full overflow-x-hidden bg-[#0a0216] text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/decorations.webp"
          alt="ERC Background Decorations"
          fill
          priority
          className="object-cover object-top opacity-90"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1609px] flex-col items-center justify-start gap-16 px-4 py-12 md:px-8 lg:gap-[169px] lg:py-20">
        <ErcHero />
        <ErcDescription />
        <ErcPrizePool />
        <ErcTimeline />
        <ErcCountdown />
        <ErcFaq />
      </div>
    </main>
  );
}
