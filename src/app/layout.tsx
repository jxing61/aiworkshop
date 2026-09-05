import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lily Grellner — Senior Frontend Engineer",
    template: "%s · Lily Grellner",
  },
  description:
    "Portfolio and resume of Lily Grellner, a senior frontend engineer building fast, accessible web interfaces with React, TypeScript, and Next.js.",
  authors: [{ name: "Lily Grellner" }],
  metadataBase: new URL("https://lilygrellner.example.com"),
  openGraph: {
    title: "Lily Grellner — Senior Frontend Engineer",
    description:
      "Portfolio and resume of Lily Grellner, a senior frontend engineer.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}