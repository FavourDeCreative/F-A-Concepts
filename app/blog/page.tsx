import type { Metadata } from "next";

import BlogHero from "@/components/blog/Hero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Automotive Blog",

  description:
    "Read expert automotive tips, maintenance guides, CarPlay and Android Auto installation advice, diagnostics, detailing, and the latest vehicle upgrade insights from Favouritech Auto Concepts.",

  keywords: [
    "Automotive blog",
    "Car maintenance tips",
    "Apple CarPlay",
    "Android Auto",
    "Vehicle diagnostics",
    "Car detailing",
    "Auto electrical repairs",
    "Automotive advice",
    "Favouritech Auto Concepts",
    "Lagos automotive blog",
  ],

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Automotive Blog | Favouritech Auto Concepts",
    description:
      "Discover expert automotive articles, maintenance tips, vehicle upgrade guides, and the latest industry insights from Favouritech Auto Concepts.",
    url: "https://www.faconcepts.com.ng/blog",
  },

  twitter: {
    title: "Automotive Blog | Favouritech Auto Concepts",
    description:
      "Expert automotive tips, CarPlay guides, diagnostics, detailing, and vehicle upgrade articles from Favouritech Auto Concepts.",
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedPost />
      <BlogGrid />
    </main>
  );
}