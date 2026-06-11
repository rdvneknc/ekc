import { workProjects, type WorkProject } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HashLink } from "@/components/ui/HashLink";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { ProjectPreview } from "@/components/work/ProjectPreview";

function WorkPageHeader() {
  return (
    <section className="border-b border-gray-100 bg-surface pt-12 pb-10 sm:pt-14 sm:pb-12">
      <Container>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Our Work
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          Website &amp; App Examples
        </h1>
        <p className="mt-3 max-w-xl text-base text-gray-600">
          A selection of websites and web apps we&apos;ve built for small
          businesses.
        </p>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: WorkProject }) {
  const linkClassName =
    "mt-5 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-all duration-200 ease-out hover:translate-x-0.5 hover:text-accent-dark";

  return (
    <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
      <ProjectPreview
        gradient={project.gradient}
        image={project.image}
        alt={project.title}
      />
      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-accent-dark">
        Sample Project
      </p>
      <h3 className="mt-2 text-lg font-bold text-secondary">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          View Example
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      ) : (
        <HashLink href="/#contact" className={linkClassName}>
          View Example
          <ArrowRightIcon className="h-4 w-4" />
        </HashLink>
      )}
    </article>
  );
}

export function WorkPageContent() {
  const featured = workProjects.find((p) => p.featured)!;
  const gridProjects = workProjects.filter((p) => !p.featured);

  return (
    <>
      <WorkPageHeader />

      <section className="py-10 sm:py-14">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <ProjectPreview
                gradient={featured.gradient}
                image={featured.image}
                alt={featured.title}
                className="rounded-none lg:min-h-full"
              />
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                  Featured Example
                </p>
                <h2 className="mt-3 text-2xl font-bold text-secondary sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {featured.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {featured.url ? (
                  <Button
                    href={featured.url}
                    className="mt-8 w-fit"
                    external
                  >
                    View Project
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button href="/#contact" className="mt-8 w-fit">
                    View Project
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-gray-100 bg-gray-50 px-8 py-8 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:px-10">
            <div className="flex items-start gap-4 text-center sm:text-left">
              <span className="hidden text-2xl sm:block" aria-hidden="true">
                💬
              </span>
              <div>
                <h2 className="text-lg font-bold text-secondary sm:text-xl">
                  Need something similar for your business?
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Tell us about your project and we&apos;ll help you get started.
                </p>
              </div>
            </div>
            <Button href="/#contact" className="shrink-0 whitespace-nowrap">
              Start a Project
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
