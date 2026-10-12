"use client";

import { useMemo } from "react";

export function WhatsAppButton() {
  const href = useMemo(() => {
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
    if (!number) return null;
    return `https://wa.me/${number}`;
  }, []);

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(26,25,24,0.22)] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze md:bottom-8 md:right-8"
    >
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded bg-charcoal px-3 py-2 text-xs text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        Chat with us on WhatsApp
      </span>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.6 5.92L0 24l6.42-1.68a11.8 11.8 0 0 0 5.62 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43ZM12.05 21.6h-.01a9.75 9.75 0 0 1-4.97-1.36l-.36-.21-3.81 1 1.02-3.71-.23-.38a9.74 9.74 0 0 1-1.5-5.2c0-5.38 4.38-9.76 9.77-9.76 2.61 0 5.06 1.02 6.91 2.87a9.7 9.7 0 0 1 2.86 6.9c0 5.38-4.39 9.75-9.68 9.75Zm5.35-7.31c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.5.07-.76.37-.27.29-1.01.99-1.01 2.41s1.04 2.79 1.18 2.98c.15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.73-.71 1.97-1.39.24-.68.24-1.26.17-1.39-.07-.12-.26-.19-.55-.34Z" />
      </svg>
    </a>
  );
}
