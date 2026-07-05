import type { Metadata } from "next";

import AboutHero from "@/components/about/Hero";
import OurStory from "@/components/about/Story";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurServices from "@/components/about/OurServices";
import Stats from "@/components/about/Stats";
import Team from "@/components/about/Team";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/about/CTA";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about Favouritech Auto Concepts, our journey, expertise, and commitment to providing premium automotive diagnostics, repairs, infotainment installations, detailing, and vehicle upgrades in Lagos, Nigeria.",

  keywords: [
    "About Favouritech Auto Concepts",
    "Automotive workshop Lagos",
    "Vehicle diagnostics",
    "Auto electrician",
    "CarPlay installation",
    "Android Auto installation",
    "Car detailing",
    "Vehicle upgrades",
    "Automotive experts Nigeria",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Us | Favouritech Auto Concepts",
    description:
      "Discover the story, mission, and expert team behind Favouritech Auto Concepts, delivering trusted automotive services in Lagos, Nigeria.",
    url: "https://www.faconcepts.com.ng/about",
  },

  twitter: {
    title: "About Us | Favouritech Auto Concepts",
    description:
      "Meet the team behind Favouritech Auto Concepts and learn why drivers trust us for premium automotive services.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <OurServices />
      <Stats />
      <Team />
      <Testimonials />
      <CTA />
    </main>
  );
}