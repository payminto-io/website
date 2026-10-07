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

// Set SITE_URL to the public deployment origin to enable the branded share image.
const siteUrl = process.env.SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Payminto | Payment infrastructure you own",
  description:
    "Composable, self-deployable payment infrastructure for humans and AI agents. Connect your acquirers, configure fees, reserves, and settlement, and integrate through APIs and webhooks.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Payminto | Payment infrastructure you own",
    description:
      "Private payment infrastructure for humans and AI agents. Your environment, your payment core.",
    images: siteUrl ? ["/brand/payminto-social.png"] : [],
    type: "website",
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title: "Payminto | Payment infrastructure you own",
    images: siteUrl ? ["/brand/payminto-social.png"] : [],
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
