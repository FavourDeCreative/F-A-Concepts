"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaWhatsapp,
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const socials = [
  {
    icon: <FaInstagram size={16} />,
    href: "https://instagram.com/favouritech",
    label: "Instagram",
  },
  {
    icon: <FaFacebookF size={16} />,
    href: "https://facebook.com/favouritech",
    label: "Facebook",
  },
  {
    icon: <FaXTwitter size={16} />,
    href: "https://twitter.com/favouritech",
    label: "X",
  },
  {
    icon: <FaTiktok size={16} />,
    href: "https://tiktok.com/@favouritech",
    label: "TikTok",
  },
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-title",
        {
          y: 50,
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
        ".cta-sub",
        {
          y: 30,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          clearProps: "all",
        },
      );

      gsap.fromTo(
        ".cta-btn",
        {
          y: 30,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.35,
          ease: "power3.out",
          clearProps: "all",
        },
      );

      gsap.fromTo(
        ".cta-social",
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.08,
          delay: 0.5,
          ease: "power3.out",
          clearProps: "all",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28">
      {/* Background */}
      {/*
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cta-bg.jpg')",
        }}
      />
      */}

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <h2 className="cta-title text-4xl font-bold leading-tight md:text-6xl">
          Ready to Transform Your Vehicle?
        </h2>

        <p className="cta-sub mt-6 max-w-2xl text-lg txt3">
          From diagnostics and auto electrical repairs to infotainment, ambient
          lighting, tinting and premium upgrades, we're ready to help.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-700"
          >
            <FaWhatsapp size={22} />
            Chat on WhatsApp
          </a>

          <a
            href="tel:+234XXXXXXXXXX"
            className="cta-btn inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            <FaPhone size={20} />
            Call Now
          </a>
        </div>

        <div className="mt-12 flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="cta-social flex h-11 w-11 items-center justify-center rounded-full border transition soc"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
