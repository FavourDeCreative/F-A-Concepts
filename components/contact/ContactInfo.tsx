"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function ContactInfo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".info-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".info-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <h2 className="info-title text-4xl font-bold md:text-5xl cta-title">
            Contact Information
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-80 txt3">
            Reach out to Favouritech Auto Concepts through any of the channels
            below. We&apos;d love to hear from you.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Address */}

          <div className="info-card rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 gd">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full btn1">
              <FaMapMarkerAlt size={22} />
            </div>

            <h3 className="text-2xl font-semibold tt3">Address</h3>

            <p className="mt-4 opacity-80 txt3">
              123 Aba Road,
              <br />
              Port Harcourt,
              <br />
              Rivers State, Nigeria.
            </p>
          </div>

          {/* Phone */}

          <div className="info-card rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 gd">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full btn1">
              <FaPhoneAlt size={22} />
            </div>

            <h3 className="text-2xl font-semibold tt3">Phone</h3>

            <a
              href="tel:+2348012345678"
              className="mt-4 block opacity-80 transition hover:opacity-100 soc"
            >
              +234 801 234 5678
            </a>
          </div>

          {/* Email */}

          <div className="info-card rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 gd">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full btn1">
              <FaEnvelope size={22} />
            </div>

            <h3 className="text-2xl font-semibold tt3">Email</h3>

            <a
              href="mailto:info@favouritechautoconcepts.com"
              className="mt-4 block break-all opacity-80 transition hover:opacity-100 soc"
            >
              info@favouritechautoconcepts.com
            </a>
          </div>

          {/* Hours */}

          <div className="info-card rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 gd">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full btn1">
              <FaClock size={22} />
            </div>

            <h3 className="text-2xl font-semibold tt3">Opening Hours</h3>

            <p className="mt-4 opacity-80 txt3">
              Monday - Saturday
              <br />
              8:00 AM - 6:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
