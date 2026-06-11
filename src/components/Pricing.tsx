import { pricingFeatures } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CheckIcon } from "@/components/ui/Icons";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-gray-100 bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Transparent Pricing. No Hidden Fees.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Simple websites start from a clear base price. More advanced projects
            like QR menus, dashboards, booking tools, and web applications are
            quoted based on scope.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl sm:p-10 lg:col-span-1">
            <p className="text-sm font-medium text-gray-500">Websites from</p>
            <p className="mt-1 text-5xl font-bold text-secondary">
              $299
              <span className="ml-2 text-base font-normal text-gray-500">
                one-time
              </span>
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Perfect for small businesses that need a clean, professional online
              presence.
            </p>

            <p className="mt-8 text-sm font-semibold text-secondary">Includes:</p>
            <ul className="mt-4 space-y-3">
              {pricingFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-secondary">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/#contact" className="w-full">
                Get Started
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md sm:p-10">
            <h3 className="text-xl font-bold text-secondary">Custom Digital Tools</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
              Need a QR menu, dashboard, booking system, or web app? Tell us what
              you need and we&apos;ll prepare a custom quote.
            </p>
            <div className="mt-8">
              <Button href="/#contact" variant="secondary" className="w-full">
                Request a Quote
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md sm:p-10">
            <h3 className="text-xl font-bold text-secondary">Optional Care Plan</h3>
            <p className="mt-2 text-3xl font-bold text-secondary">
              $39
              <span className="ml-1 text-base font-normal text-gray-500">/month</span>
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
              For small updates, fixes, maintenance, and ongoing support.
            </p>
            <div className="mt-8">
              <Button href="/#contact" variant="secondary" className="w-full">
                Learn More
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
