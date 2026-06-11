import { aboutWhyPoints, howWeWorkSteps } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { CheckIcon } from "@/components/ui/Icons";

function StepConnector({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center ${
        vertical ? "py-2" : "px-2 md:px-3 lg:px-5"
      }`}
      aria-hidden="true"
    >
      {!vertical && (
        <div className="hidden h-px w-10 bg-gradient-to-r from-transparent via-gray-300 to-gray-300 md:block lg:w-14" />
      )}
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm ring-4 ring-surface">
        <svg
          className={`h-4 w-4 text-secondary ${vertical ? "rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
      {!vertical && (
        <div className="hidden h-px w-10 bg-gradient-to-r from-gray-300 via-gray-300 to-transparent md:block lg:w-14" />
      )}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-dark">
              About EKC Digital
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Small, focused, and built for practical results.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              EKC Digital helps small businesses create clean websites, web
              applications, QR menus, dashboards, and simple digital tools
              without unnecessary complexity.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We focus on clear communication, fast delivery, and digital
              solutions that are easy to understand, easy to use, and built
              around real business needs.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md sm:p-10">
            <h3 className="text-lg font-bold text-secondary">Why work with us</h3>
            <ul className="mt-6 space-y-4">
              {aboutWhyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-secondary">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-gray-100 bg-surface px-6 py-10 sm:px-10">
          <h3 className="text-center text-lg font-bold text-secondary sm:text-xl">
            How we work
          </h3>

          <div className="mt-8 flex flex-col items-center gap-2 md:flex-row md:items-stretch md:justify-between md:gap-0">
            {howWeWorkSteps.map((step, index) => (
              <div key={step} className="contents">
                <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white px-6 py-5 text-center shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md md:max-w-none md:flex-1 md:border-0 md:bg-transparent md:px-4 md:py-2 md:shadow-none md:hover:translate-y-0 md:hover:shadow-none">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-secondary">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium leading-snug text-secondary sm:text-base">
                    {step}
                  </p>
                </div>

                {index < howWeWorkSteps.length - 1 && (
                  <>
                    <div className="md:hidden">
                      <StepConnector vertical />
                    </div>
                    <div className="hidden md:flex">
                      <StepConnector />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
