import type { Metadata } from "next";

import ServicesHero from "@/components/services/Hero";
import ServicesGrid from "@/components/services/ServicesGrid";

export const metadata: Metadata = {
  title: "Our Services",

  description:
    "Explore our professional automotive services including vehicle diagnostics, auto electrical repairs, Apple CarPlay and Android Auto installation, ambient lighting, car tinting, detailing, infotainment upgrades, and more at Favouritech Auto Concepts.",

  keywords: [
    "Automotive services",
    "Vehicle diagnostics",
    "Auto electrical repairs",
    "Apple CarPlay installation",
    "Android Auto installation",
    "Car tinting",
    "Ambient lighting",
    "Car detailing",
    "Infotainment installation",
    "Vehicle upgrades",
    "Favouritech Auto Concepts",
    "Lagos",
    "Nigeria",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Our Services | Favouritech Auto Concepts",
    description:
      "Discover our complete range of automotive services, from diagnostics and repairs to premium vehicle upgrades and infotainment installations.",
    url: "https://www.faconcepts.com.ng/services",
  },

  twitter: {
    title: "Our Services | Favouritech Auto Concepts",
    description:
      "Professional automotive diagnostics, repairs, CarPlay installation, detailing, tinting, and vehicle upgrades by Favouritech Auto Concepts.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
    </main>
  );
}