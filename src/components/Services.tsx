import { services } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceIcon } from "@/components/ui/Icons";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeader
          label="What We Do"
          title="Websites, Apps & Digital Tools for Small Businesses"
          description="From business websites to QR menus, dashboards, and simple web applications, we build clean digital solutions that help businesses look professional and work more efficiently."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-xl border border-gray-100 p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${service.color}`}
              >
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-lg font-semibold text-secondary">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
