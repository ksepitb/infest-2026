import Link from "next/link";

interface RulesCardProps {
  title: string;
  rules: string[];
}

export function RulesCard({ title, rules }: RulesCardProps) {
  return (
    <section className="relative z-10 flex flex-1 flex-col items-center px-4 pt-28 pb-24 md:pt-44 md:pb-32">
      <h1 className="glow-text-1 text-center text-4xl font-bold text-white md:text-6xl lg:text-[80px]">
        {title}
      </h1>

      <div className="bg-dark-purple/55 mt-10 w-full max-w-5xl rounded-[40px] border border-white/10 p-8 shadow-[0_0_80px_rgba(147,0,156,0.22)] backdrop-blur-md md:mt-14 md:p-12 lg:p-16">
        <ol className="list-decimal space-y-4 pl-5 text-sm leading-relaxed text-white/90 marker:font-semibold marker:text-white md:space-y-5 md:text-base">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ol>
      </div>

      <div className="mt-10 grid w-full max-w-5xl gap-4 sm:grid-cols-2 sm:gap-8 md:mt-14">
        <Link
          className="bg-gradient-6 text-infest-white shadow-box-shadow-inset relative flex min-h-[72px] items-center justify-center rounded-full px-6 py-4 text-center text-base font-bold transition hover:brightness-110 md:text-[18px]"
          href="/register"
        >
          Kembali
        </Link>
        <Link
          className="bg-gradient-6 text-infest-white shadow-box-shadow-inset relative flex min-h-[72px] items-center justify-center rounded-full px-6 py-4 text-center text-base font-bold transition hover:brightness-110 md:text-[18px]"
          href="#"
        >
          Daftar Sekarang
        </Link>
      </div>
    </section>
  );
}
