import type { Metadata } from "next";
import "./globals.css";
import PageLoader from "@/components/shared/Loader";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.faconcepts.com.ng"),

  title: {
    default: "Favouritech Auto Concepts | Premium Automotive Services",
    template: "%s | Favouritech Auto Concepts",
  },

  description:
    "Favouritech Auto Concepts offers professional vehicle diagnostics, auto electrical repairs, Android screen installation, ambient lighting, car tinting, detailing, infotainment systems, and premium vehicle upgrades.",

  keywords: [
    "Favouritech Auto Concepts",
    "Auto repair",
    "Vehicle diagnostics",
    "Car tinting",
    "Vehicle upgrades",
    "Auto electrician",
    "Android screen installation",
    "Ambient lighting",
    "Car detailing",
    "Infotainment installation",
    "Automotive workshop",
    "Nigeria",
  ],

  authors: [
    {
      name: "Favouritech Auto Concepts",
    },
  ],

  creator: "Favouritech Auto Concepts",

  publisher: "Favouritech Auto Concepts",

  category: "Automotive",

  verification: {
    other: {
      "msvalidate.01": "B734DBC791CD1DC9FA4BB8079F412896",
    },
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Favouritech Auto Concepts",

    title: "Favouritech Auto Concepts",

    description:
      "Premium automotive diagnostics, repairs, infotainment installation, detailing, tinting and vehicle upgrades.",

    url: "https://www.faconcepts.com.ng",

    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Favouritech Auto Concepts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Favouritech Auto Concepts",

    description:
      "Professional automotive diagnostics, repairs and vehicle upgrades.",

    images: ["/opengraph-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "64x64",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}