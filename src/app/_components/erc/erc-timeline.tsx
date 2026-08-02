import { SectionHeader } from "~/components/section-header";

interface TimelineItem {
  title: string;
  date: string;
}

const timelineItems: TimelineItem[] = [
  { title: "Registrasi & Pembayaran", date: "1–20 Agustus 2026" },
  { title: "Technical Meeting", date: "22 Agustus 2026" },
  { title: "Pengumpulan Paper / Proposal", date: "1 September 2026" },
  { title: "Pengumuman Finalis", date: "10 September 2026" },
  { title: "Final Pitching & Awarding", date: "20 September 2026" },
];

interface TimelineCardProps {
  item: TimelineItem;
}

function TimelineCard({ item }: TimelineCardProps) {
  return (
    <div className="bg-lighter-purple w-full max-w-[240px] rounded-2xl p-5 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.10)] sm:max-w-[260px]">
      <h3 className="text-sm leading-snug font-bold text-white sm:text-base">
        {item.title}
      </h3>
      <p className="text-infest-pink mt-1.5 text-xs font-medium sm:text-sm">
        {item.date}
      </p>
    </div>
  );
}

export function ErcTimeline() {
  return (
    <section className="relative z-10 px-6 py-20" id="erc-timeline">
      <SectionHeader title="Timeline" />
      <div className="mx-auto max-w-4xl">
        {/* Timeline Container */}
        <div className="relative">
          {/*
           * Vertical axis line — desktop: centered, mobile: left-aligned
           * Extends from first node to last node (inset top/bottom so it
           * doesn't visually overshoot the first/last cards).
           */}
          <div
            aria-hidden="true"
            className="absolute inset-y-6 left-[18px] w-[2px] bg-gradient-to-b from-[#E306D9] via-[#380356] to-[#E306D9] md:left-1/2 md:-translate-x-px"
          />

          <div className="flex flex-col">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isLast = index === timelineItems.length - 1;

              return (
                <div
                  key={index}
                  className={`relative ${isLast ? "pb-0" : "pb-12 sm:pb-14"}`}
                >
                  {/* ── MOBILE LAYOUT (hidden on md+) ───────────────────── */}
                  <div className="flex items-start gap-5 pl-10 md:hidden">
                    {/* Node */}
                    <div
                      aria-hidden="true"
                      className="bg-infest-pink absolute top-4 left-[10px] h-4 w-4 rounded-full shadow-[0_0_12px_#E306D9]"
                    />
                    <TimelineCard item={item} />
                  </div>

                  {/* ── DESKTOP LAYOUT (hidden on <md) ──────────────────── */}
                  <div className="hidden items-center md:grid md:grid-cols-[1fr_3rem_1fr]">
                    {/* Left slot */}
                    <div className="flex justify-end pr-6">
                      {isLeft ? <TimelineCard item={item} /> : <div />}
                    </div>

                    {/* Center node */}
                    <div className="flex items-center justify-center">
                      <div
                        aria-hidden="true"
                        className="bg-infest-pink h-5 w-5 rounded-full shadow-[0_0_16px_#E306D9]"
                      />
                    </div>

                    {/* Right slot */}
                    <div className="flex justify-start pl-6">
                      {!isLeft ? <TimelineCard item={item} /> : <div />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
