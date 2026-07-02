"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlogHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".hero-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="w-full pt-36 pb-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="hero-badge inline-flex rounded-full border px-5 py-2 text-sm font-semibold">
          FAC BLOG
        </span>

        <h1 className="hero-title mt-8 text-5xl font-bold leading-tight md:text-7xl tt3">
          Insights, Tips &
          <br />
          Automotive Guides
        </h1>

        <p className="hero-text mx-auto mt-8 max-w-3xl text-lg opacity-80 txt3">
          Discover expert advice on vehicle diagnostics, maintenance, repairs,
          infotainment systems, premium upgrades, detailing and everything you
          need to keep your vehicle performing at its best.
        </p>
      </div>
    </section>
  );
}
