import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "./smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Set SITE_URL to the public deployment origin to enable the supplied share image.
const siteUrl = process.env.SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Payminto | Payment infrastructure you own",
  description:
    "Self-hosted, private payment infrastructure for humans and AI agents. Accept card and crypto payments on infrastructure you deploy, own, and control.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Payminto | Payment infrastructure you own",
    description:
      "Private payment infrastructure for humans and AI agents. Your environment, your payment core.",
    images: siteUrl ? ["/generated/og-image.png"] : [],
    type: "website",
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title: "Payminto | Payment infrastructure you own",
    images: siteUrl ? ["/generated/og-image.png"] : [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
