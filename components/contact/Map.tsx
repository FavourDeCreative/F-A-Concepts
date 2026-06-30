"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaDirections, FaMapMarkedAlt } from "react-icons/fa";

export default function ContactMap() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".map-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".map-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          <h2 className="map-title text-4xl font-bold md:text-5xl">
            Visit Our Workshop
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-80">
            Stop by our workshop for diagnostics, repairs, premium upgrades,
            infotainment installations, tinting, detailing and more.
          </p>
        </div>

        {/* Map */}

        <div className="map-card overflow-hidden rounded-[25px] border">
          <iframe
            src="https://www.google.com/maps?q=Port%20Harcourt,%20Nigeria&output=embed"
            width="100%"
            height="550"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://maps.google.com/?q=Port+Harcourt,+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-red-700 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            <FaDirections />
            Get Directions
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border px-8 py-4 font-semibold transition hover:scale-105"
          >
            <FaMapMarkedAlt />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
