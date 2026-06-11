"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHash } from "@/lib/scroll-to-hash";

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    scrollToHash(hash);

    const timeoutId = window.setTimeout(() => {
      scrollToHash(hash);
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
