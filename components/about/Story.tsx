"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-image", {
        x: -80,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".story-content", {
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".story-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Image */}

        <div className="story-image">
          <div className="relative h-[650px] overflow-hidden rounded-[25px]">
            <Image
              src="/about/our-story.jpg"
              alt="Favouritech Auto Concepts"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}

        <div className="story-content">
          <span className="rounded-full border px-5 py-2 text-sm font-semibold">
            OUR STORY
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Passion For Automotive Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 opacity-80">
            Favouritech Auto Concepts was founded with a passion for delivering
            world-class automotive solutions through innovation, precision, and
            exceptional customer service.
          </p>

          <p className="mt-6 text-lg leading-8 opacity-80">
            From advanced vehicle diagnostics and electrical repairs to Android
            infotainment systems, ambient lighting, tinting, detailing, and
            premium upgrades, we help vehicle owners enjoy safer, smarter, and
            more comfortable driving experiences.
          </p>

          {/* Mission & Vision */}

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="story-card rounded-3xl border p-6">
              <FaBullseye size={30} className="mb-5 text-red-700" />

              <h3 className="text-2xl font-semibold">Our Mission</h3>

              <p className="mt-4 opacity-80 leading-7">
                To provide reliable automotive solutions using modern
                technology, skilled professionals, and unmatched customer
                service.
              </p>
            </div>

            <div className="story-card rounded-3xl border p-6">
              <FaEye size={30} className="mb-5 text-red-700" />

              <h3 className="text-2xl font-semibold">Our Vision</h3>

              <p className="mt-4 opacity-80 leading-7">
                To become one of Nigeria's most trusted automotive technology
                and vehicle upgrade centers.
              </p>
            </div>
          </div>

          {/* Highlights */}

          <div className="mt-12 space-y-5">
            {[
              "Professional vehicle diagnostics",
              "Premium infotainment installations",
              "Certified automotive technicians",
              "Modern workshop equipment",
              "Customer-first service approach",
            ].map((item) => (
              <div key={item} className="story-card flex items-center gap-4">
                <FaCheckCircle className="text-red-700" size={20} />

                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
