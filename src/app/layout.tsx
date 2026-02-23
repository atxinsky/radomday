import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RadomDay — Roll the Dice, Live the Day",
  description: "One roll decides your entire day. Watch, listen, play, eat, wear — all randomized into a perfect plan.",
  openGraph: {
    title: "RadomDay — Roll the Dice, Live the Day",
    description: "One roll decides your entire day.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
