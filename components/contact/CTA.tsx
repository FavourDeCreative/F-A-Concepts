"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".cta-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".cta-buttons", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[25px] border p-12 md:p-20 gd">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full border px-5 py-2 text-sm font-semibold gd tt3">
              Favouritech Auto Concepts
            </span>

            <h2 className="cta-title mt-8 text-4xl font-bold md:text-6xl">
              Ready To Transform Your Vehicle?
            </h2>

            <p className="cta-text mx-auto mt-6 max-w-3xl text-lg leading-8 opacity-80">
              Whether it&apos;s diagnostics, repairs, infotainment installation,
              premium vehicle upgrades, tinting, detailing, or electrical
              solutions, our experienced technicians are ready to deliver
              outstanding results for your vehicle.
            </p>

            <div className="cta-buttons mt-12 flex flex-wrap justify-center gap-5">
              <Link
                href="/services"
                className="flex items-center gap-3 rounded-full px-8 py-4 font-semibold transition duration-300 btn1"
              >
                Explore Services
                <FaArrowRight />
              </Link>

              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border px-8 py-4 font-semibold transition duration-300 btn2"
              >
                <FaWhatsapp />
                WhatsApp Us
              </a>

              <a
                href="tel:+2348012345678"
                className="flex items-center gap-3 rounded-full border px-8 py-4 font-semibold transition duration-300 btn2"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
