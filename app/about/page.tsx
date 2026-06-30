import AboutHero from "@/components/about/Hero";
import OurStory from "@/components/about/Story";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurServices from "@/components/about/OurServices";
import Stats from "@/components/about/Stats";
import Team from "@/components/about/Team";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/about/CTA";

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
