import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { HashLink } from "@/components/ui/HashLink";
import { parseHashHref } from "@/lib/scroll-to-hash";

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <Link href="/" className="text-lg font-bold text-secondary">
            {siteConfig.name}
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => {
              const { hash } = parseHashHref(link.href);
              const LinkComponent = hash ? HashLink : Link;

              return (
                <li key={link.label}>
                  <LinkComponent
                    href={link.href}
                    className="text-sm text-gray-500 transition-all duration-200 ease-out hover:text-secondary hover:underline hover:underline-offset-4 hover:decoration-accent/60"
                  >
                    {link.label}
                  </LinkComponent>
                </li>
              );
            })}
          </ul>

          <ul className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-500 transition-all duration-200 ease-out hover:text-secondary hover:underline hover:underline-offset-4 hover:decoration-accent/60"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
