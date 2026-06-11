import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-gray-100/80 py-10">
      <Container>
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-secondary">
          Trusted by small businesses worldwide
        </p>

        <div className="relative h-20 overflow-hidden sm:h-24">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-gray-100 to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-gray-100 to-transparent sm:w-20" />

          <div className="flex h-full w-max animate-marquee items-center hover:[animation-play-state:paused]">
            <Image
              src="/logos.webp"
              alt="Trusted business logos"
              width={3600}
              height={1080}
              className="h-80 w-auto shrink-0 sm:h-96"
              draggable={false}
            />
            <Image
              src="/logos.webp"
              alt=""
              aria-hidden="true"
              width={3600}
              height={1080}
              className="h-80 w-auto shrink-0 sm:h-96"
              draggable={false}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
