"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HashLink } from "@/components/ui/HashLink";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { parseHashHref } from "@/lib/scroll-to-hash";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-18">
          <Link href="/" className="text-lg font-bold tracking-tight text-secondary">
            {siteConfig.name}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/work" && pathname === "/work";
              const { hash } = parseHashHref(link.href);
              const LinkComponent = hash ? HashLink : Link;

              return (
                <li key={link.label}>
                  <LinkComponent
                    href={link.href}
                    className={`rounded-md px-2 py-1 text-sm transition-all duration-200 ease-out ${
                      isActive
                        ? "font-medium text-secondary"
                        : "text-gray-600 hover:bg-gray-50 hover:text-secondary"
                    }`}
                  >
                    {link.label}
                  </LinkComponent>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button href="/#contact" variant="primary">
              Let&apos;s Talk
              <span aria-hidden="true">→</span>
            </Button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-secondary lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-gray-100 py-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/work" && pathname === "/work";
                const { hash } = parseHashHref(link.href);
                const LinkComponent = hash ? HashLink : Link;

                return (
                  <li key={link.label}>
                    <LinkComponent
                      href={link.href}
                      className={`block rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ease-out hover:bg-gray-50 ${
                        isActive
                          ? "font-medium text-secondary"
                          : "text-gray-600 hover:text-secondary"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </LinkComponent>
                  </li>
                );
              })}
              <li className="mt-2 px-3">
                <Button href="/#contact" variant="primary" className="w-full">
                  Let&apos;s Talk →
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
