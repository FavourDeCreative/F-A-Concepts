"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".cta-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".cta-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });

      gsap.from(".cta-buttons", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[30px] border bg-gradient-to-r from-[#b0060d] to-[#041496] p-12 text-center text-white md:p-20">
          <span className="cta-badge inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
            LET'S GET STARTED
          </span>

          <h2 className="cta-title mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Ready to Give Your Vehicle
            <br />
            the Premium Treatment?
          </h2>

          <p className="cta-text mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Whether you need professional diagnostics, electrical repairs,
            infotainment installation, ceramic tinting, detailing, or complete
            vehicle upgrades, Favouritech Auto Concepts is here to deliver
            quality workmanship you can trust.
          </p>

          <div className="cta-buttons mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#b0060d] transition duration-300 hover:scale-105"
            >
              Book Appointment
              <FaArrowRight />
            </Link>

            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-[#b0060d]"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

            <a
              href="tel:+2348012345678"
              className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-[#b0060d]"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
