"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";

export default function ContactHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".hero-buttons", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-[60vh] items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <img
        src="/contact/contact-hero.jpg"
        alt="Contact Favouritech Auto Concepts"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="hero-title text-5xl font-bold md:text-6xl">
          Get In Touch
        </h1>

        <p className="hero-text mx-auto mt-6 max-w-2xl text-lg md:text-xl">
          Whether you need diagnostics, repairs, infotainment upgrades, tinting,
          detailing or premium vehicle enhancements, our team is ready to help.
        </p>

        <div className="hero-buttons mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-full bg-red-700 px-8 py-4 font-semibold transition hover:scale-105"
          >
            <FaCalendarCheck />
            Book Appointment
          </Link>

          <a
            href="tel:+2348012345678"
            className="flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold backdrop-blur-md transition hover:scale-105"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
