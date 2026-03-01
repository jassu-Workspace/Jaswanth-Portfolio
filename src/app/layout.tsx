import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaswanth | AI/ML & Full-Stack Developer",
  description:
    "Personal portfolio of Jaswanth — AI/ML & Full-Stack Architect. SIH 2025 Finalist, building Horizon AI and pushing the boundaries of intelligent software.",
  keywords: ["Jaswanth", "AI ML Developer", "Full Stack", "Next.js", "Portfolio", "SIH 2025"],
  authors: [{ name: "Jaswanth" }],
  openGraph: {
    title: "Jaswanth | AI/ML & Full-Stack Developer",
    description: "Personal portfolio of Jaswanth — AI/ML & Full-Stack Architect",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-[var(--font-space-grotesk)] antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
