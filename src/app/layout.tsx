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
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "AustinClosets Custom Interiors",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "AustinClosets Custom Interiors",
    description: siteConfig.description,
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
