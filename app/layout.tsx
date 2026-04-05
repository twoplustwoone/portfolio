import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Francisco Di Giandomenico — Frontend Engineer",
  description:
    "Frontend engineer based in NYC. I build things for people who notice when something feels slightly off.",
  openGraph: {
    title: "Francisco Di Giandomenico — Frontend Engineer",
    description:
      "Frontend engineer based in NYC. Six-plus years shipping AI-integrated products at Salesforce.",
    type: "website",
    url: "https://twoplustwoone.dev",
    siteName: "Francisco Di Giandomenico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Di Giandomenico — Frontend Engineer",
    description:
      "Frontend engineer based in NYC. Six-plus years shipping AI-integrated products at Salesforce.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
