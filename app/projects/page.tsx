import type { Metadata } from "next";

import ProjectsHero from "@/components/projects/Hero";
import ProjectGrid from "@/components/projects/ProjectGrd";

export const metadata: Metadata = {
  title: "Our Projects",

  description:
    "Explore our completed automotive projects, including Android Auto and Apple CarPlay installations, ambient lighting, vehicle diagnostics, detailing, tinting, audio upgrades, and custom automotive solutions by Favouritech Auto Concepts.",

  keywords: [
    "Automotive projects",
    "CarPlay installation Lagos",
    "Android Auto installation",
    "Vehicle upgrades",
    "Ambient lighting",
    "Car detailing",
    "Vehicle diagnostics",
    "Infotainment installation",
    "Favouritech Auto Concepts",
  ],

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Our Projects | Favouritech Auto Concepts",
    description:
      "Browse our portfolio of completed automotive projects, showcasing premium vehicle upgrades and professional installations.",
    url: "https://www.faconcepts.com.ng/projects",
  },

  twitter: {
    title: "Our Projects | Favouritech Auto Concepts",
    description:
      "See how Favouritech Auto Concepts transforms vehicles with premium automotive services and upgrades.",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectGrid />
    </main>
  );
}