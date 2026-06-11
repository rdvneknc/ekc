import Link from "next/link";
import { ReactNode } from "react";
import { HashLink } from "@/components/ui/HashLink";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-secondary text-white border border-secondary shadow-sm shadow-secondary/10 hover:bg-secondary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/25 active:translate-y-0 active:scale-[0.98]",
  secondary:
    "bg-white text-secondary border border-gray-300 shadow-sm hover:border-secondary hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]",
  accent:
    "bg-accent text-secondary border border-accent font-semibold shadow-sm shadow-accent/20 hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 active:translate-y-0 active:scale-[0.98]",
  outline:
    "bg-white/10 text-white border border-white/40 backdrop-blur-sm hover:border-white hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/30 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (href.includes("#")) {
    return (
      <HashLink href={href} className={classes}>
        {children}
      </HashLink>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
