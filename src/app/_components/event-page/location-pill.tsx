import { locationCircleGradient, locationPillStyle } from "./styles";

export function LocationPill({ location }: { location: string }) {
  return (
    <div className="flex justify-center">
      <div
        style={locationPillStyle}
        className="flex w-full max-w-[1000px] items-center gap-4 px-4 py-3 lg:h-[108px] lg:gap-6 lg:px-6"
      >
        <div
          style={{ background: locationCircleGradient }}
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full lg:h-[145px] lg:w-[145px]"
        >
          {/* Ikon pin lokasi */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="lg:h-10 lg:w-10"
          >
            <path
              d="M12 2C7.58 2 4 5.58 4 10c0 5.25 6.5 11.24 7.03 11.72a1.5 1.5 0 0 0 1.94 0C13.5 21.24 20 15.25 20 10c0-4.42-3.58-8-8-8Zm0 10.5A2.5 2.5 0 1 1 12 7.5a2.5 2.5 0 0 1 0 5Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        <p
          style={{ textShadow: "0 4px 4px rgba(0,0,0,0.25)" }}
          className="font-poppins text-xl font-bold leading-none text-white lg:text-[40px]"
        >
          {location}
        </p>
      </div>
    </div>
  );
}
