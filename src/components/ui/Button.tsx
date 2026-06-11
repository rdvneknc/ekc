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
    "bg-secondary text-white border border-secondary hover:bg-secondary/90 hover:-translate-y-0.5 hover:shadow-md hover:shadow-secondary/15 active:translate-y-0",
  secondary:
    "bg-transparent text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-secondary hover:bg-white/60 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0",
  accent:
    "bg-accent text-secondary border border-accent font-semibold hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/25 active:translate-y-0",
  outline:
    "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-out ${variants[variant]} ${className}`;

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
