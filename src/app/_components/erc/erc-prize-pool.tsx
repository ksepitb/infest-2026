import { SectionHeader } from "~/components/section-header";

interface PrizeItem {
  rank: string;
  prize: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
}

const prizes: PrizeItem[] = [
  {
    rank: "Juara 1",
    prize: "Rp5.000.000,00 + e-certificate",
    gradientFrom: "#FFB800",
    gradientTo: "#FF8C00",
    glowColor: "rgba(255,184,0,0.4)",
  },
  {
    rank: "Juara 2",
    prize: "Rp3.000.000,00 + e-certificate",
    gradientFrom: "#C0C0C0",
    gradientTo: "#808080",
    glowColor: "rgba(192,192,192,0.3)",
  },
  {
    rank: "Juara 3",
    prize: "Rp2.000.000,00 + e-certificate",
    gradientFrom: "#CD7F32",
    gradientTo: "#8B5A2B",
    glowColor: "rgba(205,127,50,0.35)",
  },
];

export function ErcPrizePool() {
  return (
    <section className="relative z-10 px-6 py-20" id="erc-prize">
      <SectionHeader title="Prize Pool" />
      <div className="mx-auto max-w-2xl">
        {/* Prize Rows */}
        <div className="flex flex-col gap-7">
          {prizes.map((item) => (
            <div key={item.rank} className="flex items-center gap-5 sm:gap-8">
              {/* Rank Badge */}
              <div
                className="flex h-12 w-28 shrink-0 items-center justify-center rounded-full text-sm font-black text-white sm:h-14 sm:w-32 sm:text-base"
                style={{
                  background: `linear-gradient(135deg, ${item.gradientFrom} 0%, ${item.gradientTo} 100%)`,
                  boxShadow: `0 0 20px ${item.glowColor}`,
                }}
              >
                {item.rank}
              </div>

              {/* Prize Text */}
              <p className="text-base font-bold text-white sm:text-xl md:text-2xl">
                {item.prize}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
