import Image from "next/image";

interface ProjectPreviewProps {
  gradient: string;
  image?: string;
  alt?: string;
  className?: string;
}

export function ProjectPreview({
  gradient,
  image,
  alt = "Project preview",
  className = "",
}: ProjectPreviewProps) {
  if (image) {
    return (
      <div className={`group overflow-hidden bg-gray-100 ${className}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 576px"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`group overflow-hidden rounded-xl bg-gray-100 ${className}`}>
      <div
        className={`aspect-[16/10] bg-gradient-to-br ${gradient} p-4 transition-transform duration-500 ease-out group-hover:scale-105 sm:p-6`}
      >
        <div className="h-full rounded-lg bg-white/15 backdrop-blur-sm shadow-inner">
          <div className="flex h-7 items-center gap-1.5 border-b border-white/20 px-4">
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
          </div>
          <div className="p-4">
            <div className="mb-3 h-3 w-1/3 rounded bg-white/40" />
            <div className="mb-2 h-2 w-full rounded bg-white/25" />
            <div className="mb-2 h-2 w-4/5 rounded bg-white/25" />
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="aspect-video rounded bg-white/20" />
              <div className="aspect-video rounded bg-white/20" />
              <div className="aspect-video rounded bg-white/20" />
            </div>
            <div className="mt-4 h-8 w-24 rounded-lg bg-white/35" />
          </div>
        </div>
      </div>
    </div>
  );
}
