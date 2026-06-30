"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ServicesHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".hero-text", {
        y: 30,
        opacity: 0,
        delay: 0.2,
        duration: 1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-[55vh] items-center justify-center overflow-hidden" id="hero"
    >
      {/* Background */}

      <img
        src="/services/service-bg.jpg"
        alt="Services"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="hero-title text-5xl font-bold md:text-6xl">
          Our Services
        </h1>

        <p className="hero-text mx-auto mt-6 max-w-2xl text-lg">
          We provide premium automotive diagnostics, repairs, infotainment
          installations and vehicle upgrades designed to enhance performance,
          comfort and style.
        </p>
      </div>
    </section>
  );
}
