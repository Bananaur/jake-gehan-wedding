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
        url: "/layout-2.png",
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
    title: "You Are Cordially Invited!",
    description:
      "Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026.",
    images: ["/layout-2.png"],
  },
};