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
        <div className="image-reveal relative aspect-[4/5] overflow-hidden bg-ivory-deep">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="mt-5 flex items-start justify-between gap-4 border-t border-border pt-5">
          <div>
            <h3 className="font-display text-2xl text-charcoal">{service.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">
              {service.shortDescription}
            </p>
          </div>
          <span className="mt-1 shrink-0 text-[0.68rem] font-medium tracking-[0.16em] uppercase text-bronze transition-transform duration-300 group-hover:translate-x-1">
            Explore
          </span>
        </div>
      </Link>
    </article>
  );
}
