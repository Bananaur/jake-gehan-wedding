import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jake-gehan-wedding.vercel.app"),

  title: "You Are Cordially Invited!",
  description:
    "Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026 at Villa Cruz Nature's Resort.",

  openGraph: {
    title: "You Are Cordially Invited!",
    description:
      "Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026.",
    url: "https://jake-gehan-wedding.vercel.app",
    siteName: "Jake & Gehan Wedding",
    images: [
      {
        url: "https://jake-gehan-wedding.vercel.app/layout-2.png",
        width: 1200,
        height: 630,
        alt: "Jake and Gehan Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "You Are Invited!",
    description:
      "Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026.",
    images: ["https://jake-gehan-wedding.vercel.app/layout-2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={greatVibes.variable}>
      <body>{children}</body>
    </html>
  );
}