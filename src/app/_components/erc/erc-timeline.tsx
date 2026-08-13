import Image from "next/image";
import { SectionHeader } from "~/components/section-header";
import { GradientDivider } from "../event-page/theme-divider";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  { id: 1, title: "ERC Registration", date: "5 - 13 Juli 2025" },
  { id: 2, title: "Preliminary Stage", date: "15 - 20 Juli 2025" },
  { id: 3, title: "Proposal Submission", date: "22 - 28 Juli 2025" },
  { id: 4, title: "Finalist Announcement", date: "2 Agustus 2025" },
  { id: 5, title: "Final Presentation", date: "10 Agustus 2025" },
  { id: 6, title: "Awarding Day", date: "15 Agustus 2025" },
];

function TimelineCard({ event }: { event: TimelineEvent }) {
  return (
    <div className="bg-gradient-custom flex min-h-[100px] w-full max-w-[320px] flex-col items-center justify-center rounded-[20px] p-6 px-6 py-5 text-center break-words shadow-[inset_5px_6px_4.5px_0px_rgba(255,254,255,0.25)] transition-all duration-300 hover:scale-[1.02] sm:min-h-[140px] sm:max-w-[350px] lg:px-8 lg:py-6">
      <h3 className="font-poppins text-infest-white glow-text-3 mb-2 text-xl leading-tight font-bold sm:text-2xl lg:mb-[8px] lg:text-[28px]">
        {event.title}
      </h3>
      <p className="font-poppins text-base leading-tight font-semibold text-[#E5C7F7] drop-shadow-[0_2px_10px_rgba(227,6,217,0.4)] sm:text-lg lg:text-xl">
        {event.date}
      </p>
    </div>
  );
}

export function ErcTimeline() {
  return (
    <section
      className="relative mx-auto flex w-full max-w-[1509px] scroll-mt-32 flex-col items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:gap-[85px] lg:px-8 lg:py-24"
      id="erc-timeline"
    >
      {/* Ornament 3 Left */}
      <div className="pointer-events-none absolute top-[-20%] left-[-15%] z-0 opacity-80 select-none">
        <Image
          src="/images/ornament3-left.png"
          alt=""
          width={1000}
          height={1000}
          className="w-[300px] object-contain sm:w-[600px] md:w-[1000px]"
        />
      </div>

      <Image
        alt=""
        aria-hidden="true"
        className="absolute right-[-50%] w-[1400px] opacity-80 backdrop-blur-lg max-md:w-[600px] max-md:opacity-40"
        height={900}
        src="/images/registration/regis-circle-left.png"
        width={900}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="absolute top-[90%] left-[-40%] z-0 w-[1400px] rotate-[45deg] opacity-70 backdrop-blur-lg max-md:w-[600px] max-md:opacity-40"
        height={900}
        src="/images/registration/regis-circle-left.png"
        width={900}
      />
      <GradientDivider>Timeline</GradientDivider>
      <div className="relative flex w-full flex-col items-center gap-8 lg:gap-[63px]">
        <div className="bg-light-purple absolute top-0 bottom-0 left-1/2 z-0 hidden w-[3px] -translate-x-1/2 shadow-[0_0_10px_#E306D9] lg:block" />
        {TIMELINE_EVENTS.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={event.id}
              className="relative z-10 grid w-full grid-cols-1 items-center gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
            >
              {isLeft ? (
                <div className="ml-auto flex w-full justify-center justify-self-end lg:mr-8 lg:w-[460px] lg:justify-end xl:mr-12">
                  <TimelineCard event={event} />
                </div>
              ) : (
                <div className="hidden lg:block" />
              )}
              <div className="bg-infest-pink absolute top-1/2 left-1/2 z-20 hidden h-[38px] w-[38px] shrink-0 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8),0_0_20px_#E306D9] lg:block" />
              {isLeft ? (
                <div className="hidden lg:block" />
              ) : (
                <div className="mr-auto flex w-full justify-center justify-self-start lg:ml-8 lg:w-[460px] lg:justify-start xl:ml-12">
                  <TimelineCard event={event} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
