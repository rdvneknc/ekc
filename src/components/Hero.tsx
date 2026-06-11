import { heroFeatures, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ServiceIcon } from "@/components/ui/Icons";

function HeroFeatures({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-8 ${className}`}>
      {heroFeatures.map((feature) => (
        <li
          key={feature.label}
          className="flex items-center gap-3 text-sm font-medium text-secondary"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-secondary shadow-sm">
            <ServiceIcon name={feature.icon} className="h-5 w-5" />
          </span>
          {feature.label}
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  return (
    <>
      <section className="relative min-h-[calc(100vw*888/500)] overflow-hidden py-12 sm:py-16 lg:min-h-[600px] lg:py-24">
        <div
          className="absolute inset-0 bg-[length:100%_auto] bg-top bg-no-repeat lg:hidden"
          style={{ backgroundImage: "url('/headerphotomobile.jpg.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-right bg-no-repeat lg:block"
          style={{ backgroundImage: "url('/headerphoto.webp')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/92 from-0% via-white/75 via-[38%] to-transparent to-[55%] lg:bg-gradient-to-r lg:from-white lg:from-[32%] lg:via-white/30 lg:to-transparent"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-lg">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
                {siteConfig.tagline}
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-secondary sm:text-5xl lg:text-[3.25rem]">
                Professional Websites That{" "}
                <span className="relative inline-block">
                  Win Customers
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-accent" />
                </span>
                .
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                We create beautiful, fast-loading websites for small businesses.
                No technical headaches — just a professional online presence that
                brings in more leads.
              </p>

              <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center">
                <Button href="/work" className="w-full lg:w-auto">
                  See Our Work
                  <span aria-hidden="true">→</span>
                </Button>
                <Button
                  href="/#pricing"
                  variant="secondary"
                  className="w-full lg:w-auto"
                >
                  View Pricing
                </Button>
              </div>

              <HeroFeatures className="mt-10 hidden lg:flex" />
            </div>

            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </Container>
      </section>

      <section className="border-b border-gray-100 bg-surface py-6 lg:hidden">
        <Container>
          <HeroFeatures className="flex-col items-start gap-4" />
        </Container>
      </section>
    </>
  );
}
