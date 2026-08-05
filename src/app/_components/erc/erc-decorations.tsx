import Image from "next/image";

export function ErcDecorations() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <Image
        alt=""
        className="object-cover object-top opacity-80"
        fill
        priority
        sizes="100vw"
        src="/assets/erc/decorations.webp"
      />
    </div>
  );
}
