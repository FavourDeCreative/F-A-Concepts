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
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".info-title",
        {
          y: 40,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          clearProps: "all",
        },
      );

      gsap.fromTo(
        ".info-card",
        {
          y: 60,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.15,
          delay: 0.2,
          ease: "power3.out",
          clearProps: "all",
        },
      );
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
            below. We'd love to hear from you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Address */}
          <div className="info-card rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 gd">
            <div className="btn1 mb-6 flex h-14 w-14 items-center justify-center rounded-full">
              <FaMapMarkerAlt size={22} />
            </div>

            <h3 className="tt3 text-2xl font-semibold">Address</h3>

            <p className="txt3 mt-4 opacity-80">
              Fagba Market,
              <br />
              Iju Road,
              <br />
              Lagos, Nigeria.
            </p>
          </div>

          {/* Phone */}
          <div className="info-card rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 gd">
            <div className="btn1 mb-6 flex h-14 w-14 items-center justify-center rounded-full">
              <FaPhoneAlt size={22} />
            </div>

            <h3 className="tt3 text-2xl font-semibold">Phone</h3>

            <a
              href="tel:+2348167624681"
              className="soc mt-4 block opacity-80 transition hover:opacity-100"
            >
              +234 816 762 4681
            </a>
          </div>

          {/* Email */}
          <div className="info-card rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 gd">
            <div className="btn1 mb-6 flex h-14 w-14 items-center justify-center rounded-full">
              <FaEnvelope size={22} />
            </div>

            <h3 className="tt3 text-2xl font-semibold">Email</h3>

            <a
              href="mailto:favouritechautoconcepts@gmail.com"
              className="soc mt-4 block break-all opacity-80 transition hover:opacity-100"
            >
              favouritechautoconcepts@gmail.com
            </a>
          </div>

          {/* Hours */}
          <div className="info-card rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 gd">
            <div className="btn1 mb-6 flex h-14 w-14 items-center justify-center rounded-full">
              <FaClock size={22} />
            </div>

            <h3 className="tt3 text-2xl font-semibold">Opening Hours</h3>

            <p className="txt3 mt-4 opacity-80">
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
