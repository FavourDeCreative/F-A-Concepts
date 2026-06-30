"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function AboutHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });

      gsap.from(".hero-buttons", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image */}

      <Image
        src="/about/about-bg.png"
        alt="Favouritech Auto Concepts"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <span className="hero-subtitle inline-flex rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
          ABOUT FAVOURITECH AUTO CONCEPTS
        </span>

        <h1 className="hero-title mt-8 max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
          Driving Innovation.
          <br />
          Delivering Excellence.
        </h1>

        <p className="hero-text mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
          Favouritech Auto Concepts specializes in premium automotive
          diagnostics, repairs, infotainment installations, electrical
          solutions, detailing, tinting, and vehicle upgrades. We combine modern
          technology with skilled craftsmanship to give every customer an
          exceptional experience.
        </p>

        <div className="hero-buttons mt-12 flex flex-wrap gap-5">
          <Link
            href="/services"
            className="flex items-center gap-3 rounded-full bg-red-700 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
          >
            Explore Services
            <FaArrowRight />
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
          >
            <FaPhoneAlt />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
