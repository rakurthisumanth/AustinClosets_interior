import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article className={cn("group", className)}>
      <Link href={`/services#${service.slug}`} className="block">
        <div className="image-reveal relative aspect-[16/11] overflow-hidden bg-ivory-deep sm:aspect-[4/3]">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="mt-4 flex items-start justify-between gap-3 border-t border-border pt-4 md:mt-5 md:gap-4 md:pt-5">
          <div>
            <h3 className="font-display text-[1.55rem] text-charcoal md:text-2xl">
              {service.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">
              {service.shortDescription}
            </p>
          </div>
          <span className="mt-1 shrink-0 text-[0.65rem] font-medium tracking-[0.14em] uppercase text-bronze transition-transform duration-300 group-hover:translate-x-1 md:text-[0.68rem] md:tracking-[0.16em]">
            Explore
          </span>
        </div>
      </Link>
    </article>
  );
}
