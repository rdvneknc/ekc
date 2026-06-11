import Image from "next/image";
import { homeWorkProjects } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function Work() {
  return (
    <section id="work" className="bg-secondary py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeader
          label="Our Work"
          title="Websites & Apps We've Built"
          description="A selection of recent websites and web applications we've delivered for small businesses."
          dark
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeWorkProjects.map((project) => {
            const href = project.url ?? "/work";

            return (
              <a
                key={project.title}
                href={href}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                className="group overflow-hidden rounded-xl bg-gray-800 transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 384px"
                    />
                  ) : (
                    <div
                      className={`h-full bg-gradient-to-br ${project.gradient} p-4 transition-transform duration-500 ease-out group-hover:scale-105`}
                    >
                      <div className="h-full rounded-lg bg-white/10 backdrop-blur-sm" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{project.title}</p>
                    <p className="text-xs text-gray-400">{project.category}</p>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-accent group-hover:text-secondary">
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href="/work" variant="outline">
            View All Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
