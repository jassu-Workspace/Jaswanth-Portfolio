import type { Metadata } from "next";
import { Marcellus, Sora } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaswanth | AI Systems & Product Engineer",
  description:
    "Portfolio of Jaswanth, an AI systems and full-stack product engineer building high-clarity digital experiences, applied intelligence, and ambitious software.",
  keywords: ["Jaswanth", "AI Engineer", "Full Stack", "Next.js", "Portfolio", "Product Engineer"],
  authors: [{ name: "Jaswanth" }],
  openGraph: {
    title: "Jaswanth | AI Systems & Product Engineer",
    description: "A premium portfolio experience with advanced motion, product storytelling, and engineering depth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${marcellus.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
