import Header from "@/components/header";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  fallback: ["Arial", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  fallback: ["Arial", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
  subsets: ["latin"],
});

const hack = localFont({
  src: "./fonts/hack-regular-subset.woff2",
  display: "swap",
  variable: "--font-hack",
});

export const metadata: Metadata = {
  title: {
    template: "%s – Lance Yeo",
    default: "Lance Yeo – Web Developer",
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
      className={`${plusJakartaSans.variable} ${bricolageGrotesque.variable} ${hack.variable} antialiased`}
    >
      <body>
        <ReactLenis root options={{ lerp: 0.15 }} />
        <Header />
        {children}
      </body>
    </html>
  );
}
