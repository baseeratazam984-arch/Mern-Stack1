import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title: "RUSSI.DEV — Salam Ali | Full-Stack Web Developer",
  description:
    "MERN Stack and Full-Stack Web Developer in Pakistan. Next.js, React, Node.js, Express, and MongoDB products including Shop Ease, Digital Impact, Matias, and Buyvora.",
  keywords: [
    "MERN",
    "Full-Stack",
    "Next.js",
    "React",
    "Pakistan",
    "Salam Ali",
    "RUSSI.DEV",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
