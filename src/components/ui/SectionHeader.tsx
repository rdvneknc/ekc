interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  dark = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent-dark">
        {label}
      </span>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-secondary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${dark ? "text-gray-400" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
