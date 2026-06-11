import { siteConfig } from "@/lib/constants";

import { Button } from "@/components/ui/Button";

import { Container } from "@/components/ui/Container";



function MessageIcon() {

  return (

    <svg

      className="h-5 w-5 text-secondary"

      fill="none"

      viewBox="0 0 24 24"

      stroke="currentColor"

      strokeWidth={1.75}

    >

      <path

        strokeLinecap="round"

        strokeLinejoin="round"

        d="M8 10h8M8 14h5m-7 6l3.5-3H18a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h1z"

      />

    </svg>

  );

}



export function ContactCTA() {

  return (

    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">

      <Container>

        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-secondary px-8 py-10 sm:flex-row sm:px-12 sm:py-12">

          <div className="flex items-start gap-4 text-center sm:text-left">

            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent sm:flex">

              <MessageIcon />

            </span>

            <div>

              <h2 className="text-xl font-bold text-white sm:text-2xl">

                Ready to Build Something Useful for Your Business?

              </h2>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">

                From websites to QR menus, dashboards, and simple web apps — we

                build clean digital solutions that help your business look

                professional and work better.

              </p>

            </div>

          </div>

          <Button

            href={siteConfig.whatsappUrl}

            variant="accent"

            className="shrink-0 whitespace-nowrap px-8"

            external

          >

            Let&apos;s Talk

            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>

          </Button>

        </div>

      </Container>

    </section>

  );

}


