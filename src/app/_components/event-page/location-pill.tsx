import { locationPillStyle } from "./styles";

type LocationPillProps = {
  location: string;
};

export function LocationPill({ location }: LocationPillProps) {
  return (
    <div className="flex justify-center">
      <div className="relative flex w-full max-w-[900px] items-center">
        {/* Container Ikon */}
        <div className="relative z-10 -ml-6 flex h-20 w-20 shrink-0 items-center justify-center lg:-ml-12 lg:h-[130px] lg:w-[130px]">
          <img
            src="/images/base-logo-location.svg"
            alt="Circle Base"
            className="absolute inset-0 h-full w-full object-contain"
          />

          {/* Logo Lokasi Diperbesar (h-[65%] w-[65%]) */}
          <img
            src="/images/location-logo.png"
            alt="Location Icon"
            className="relative z-10 h-[65%] w-[65%] object-contain"
          />
        </div>

        <div
          style={locationPillStyle}
          className="z-0 -ml-10 flex w-full items-center gap-4 py-3 pr-8 pl-8 lg:-ml-16 lg:h-[95px] lg:gap-6 lg:pr-12 lg:pl-20"
        >
          <p
            style={{ textShadow: "0 4px 4px rgba(0,0,0,0.25)" }}
            className="font-poppins text-xl leading-none font-bold text-white lg:text-[32px]"
          >
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
