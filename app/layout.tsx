import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { Alegreya_Sans, Fraunces, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sona - Habit Tracking That Forgives",
  description:
    "Build habits that survive real life. Sona tracks consistency (not fragile streaks) and lets you earn rest days so one missed day doesn’t erase your progress.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alegreyaSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
