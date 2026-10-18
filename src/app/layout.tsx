import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ConsultGuide } from "@/components/layout/ConsultGuide";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { siteConfig } from "@/data/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  // Prefer lining figures so digits like 2 / 7 / 9 share the same height
  adjustFontFallback: true,
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AustinClosets Custom Interiors",
    template: `%s | AustinClosets`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "AustinClosets Custom Interiors",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "AustinClosets — Closets, Kitchens, Cabinets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AustinClosets Custom Interiors",
    description: siteConfig.description,
    images: ["/og-image.jpg?v=2"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream font-body text-charcoal antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <ConsultGuide />
      </body>
    </html>
  );
}
