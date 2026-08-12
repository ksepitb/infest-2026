import { GradientDivider } from "../event-page/theme-divider";

interface PrizeItem {
  rank: string;
  prize: string;
  badgeClassName: string;
  textClassName: string;
}

const prizes: PrizeItem[] = [
  {
    rank: "Juara 1",
    prize: "Rp5.000.000,00 + e-certificate",
    badgeClassName:
      "flex h-[70px] w-[220px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(123deg,rgba(227,6,217,0.66)_0%,rgba(255,184,0,0.66)_100%)] shadow-[inset_2px_2px_12px_rgba(255,255,255,0.7),0px_4px_25px_rgba(0,0,0,0.8)] px-[26px] py-[10px] sm:h-[80px] sm:w-[240px]",
    textClassName:
      "font-poppins text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] sm:text-2xl lg:text-[28px]",
  },
  {
    rank: "Juara 2",
    prize: "Rp3.000.000,00 + e-certificate",
    badgeClassName:
      "flex h-[70px] w-[220px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(69deg,rgba(144,140,159,0.66)_0%,rgba(255,255,255,0.66)_64%,rgba(78,12,81,0.66)_100%)] shadow-[inset_2px_2px_12px_rgba(255,255,255,0.8),0px_4px_20px_rgba(0,0,0,0.6)] px-[26px] py-[10px] sm:h-[80px] sm:w-[240px]",
    textClassName:
      "font-poppins text-xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] sm:text-2xl lg:text-[28px]",
  },
  {
    rank: "Juara 3",
    prize: "Rp2.000.000,00 + e-certificate",
    badgeClassName:
      "flex h-[70px] w-[220px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(69deg,rgba(179,142,81,0.66)_0%,rgba(246,220,187,0.66)_47%,rgba(153,106,205,0.66)_100%)] shadow-[inset_2px_2px_12px_rgba(255,255,255,0.8),0px_4px_20px_rgba(0,0,0,0.6)] px-[26px] py-[10px] sm:h-[80px] sm:w-[240px]",
    textClassName:
      "font-poppins text-xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] sm:text-2xl lg:text-[28px]",
  },
];

export function BccPrizePool() {
  return (
    <section
      className="mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center gap-[61px] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-12"
      id="bcc-prize-pool"
    >
      <GradientDivider>Prize Pool</GradientDivider>
      <div className="flex w-full max-w-full flex-col items-center gap-6">
        {prizes.map((item) => (
          <div
            key={item.rank}
            className="flex w-full max-w-[976px] flex-col items-center justify-start gap-4 break-words sm:flex-row sm:gap-6 lg:gap-[24px]"
          >
            <div className={item.badgeClassName}>
              <span className={item.textClassName}>{item.rank}</span>
            </div>
            <p className="font-poppins text-shadow-link text-center text-xl leading-[100%] font-semibold text-white sm:text-left md:text-3xl lg:text-[36px]">
              {item.prize}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
