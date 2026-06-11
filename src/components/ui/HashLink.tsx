"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { parseHashHref, scrollToHash } from "@/lib/scroll-to-hash";

interface HashLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function HashLink({ href, className, children, onClick }: HashLinkProps) {
  const pathname = usePathname();
  const { path, hash } = parseHashHref(href);

  if (!hash) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const isSamePage = pathname === path;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (isSamePage) {
      event.preventDefault();
      scrollToHash(hash);
      window.history.pushState(null, "", `#${hash}`);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
