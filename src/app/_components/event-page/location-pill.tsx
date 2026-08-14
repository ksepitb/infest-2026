import Image from "next/image";

import { locationPillStyle } from "./styles";

type LocationPillProps = {
  location: string;
};

export function LocationPill({ location }: LocationPillProps) {
  return (
    <div className="flex justify-center">
      <div className="relative flex w-full max-w-[400px] items-center md:max-w-[800px]">
        {/* Container Ikon */}
        <div className="relative z-10 -ml-6 flex h-20 w-20 shrink-0 items-center justify-center lg:-ml-12 lg:h-[120px] lg:w-[120px]">
          <div className="absolute inset-0">
            <Image
              alt=""
              aria-hidden="true"
              className="object-contain"
              fill
              sizes="(max-width: 1024px) 80px, 130px"
              src="/images/base-logo-location.svg"
            />
          </div>

          {/* Logo Lokasi Diperbesar (h-[65%] w-[65%]) */}
          <div className="relative z-10 h-[65%] w-[65%]">
            <Image
              alt="Location"
              aria-hidden="true"
              className="object-contain"
              fill
              sizes="(max-width: 1024px) 52px, 84px"
              src="/images/location-logo.png"
            />
          </div>
        </div>

        <div
          style={locationPillStyle}
          className="z-0 -ml-10 flex w-full items-center gap-4 py-3 pr-8 pl-10 sm:pl-12 lg:-ml-16 lg:h-[85px] lg:gap-6 lg:pr-12 lg:pl-20"
        >
          <p
            style={{ textShadow: "0 4px 4px rgba(0,0,0,0.25)" }}
            className="font-poppins text-center text-lg leading-none font-bold text-white lg:text-2xl"
          >
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
