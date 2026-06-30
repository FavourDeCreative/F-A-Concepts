"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

const socials = [
  { icon: <FaInstagram size={14} />, href: "https://instagram.com/favouritech", label: "Instagram" },
  { icon: <FaFacebookF size={14} />, href: "https://facebook.com/favouritech", label: "Facebook" },
  { icon: <FaTwitter size={14} />, href: "https://twitter.com/favouritech", label: "Twitter" },
  { icon: <FaTiktok size={14} />, href: "https://tiktok.com/@favouritech", label: "TikTok" },
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".cta-sub", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".cta-primary", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.35,
        ease: "power3.out",
      });

      gsap.from(".cta-social", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.6,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/cta-bg.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Glassmorphism layer */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 w-full py-28 px-6 flex flex-col items-center justify-center text-center text-white">

        {/* Title */}
        <h2 className="cta-title text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
          Need Professional Automotive Service?
        </h2>

        {/* Subtitle */}
        <p className="cta-sub mt-5 text-lg md:text-xl opacity-80 max-w-2xl">
          Book an appointment with FAC and get your car handled by experts. we're one call away.
        </p>

        {/* Primary Buttons — larger */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          {/* WhatsApp */}

  <a href="https://wa.me/234XXXXXXXXXX"
  target="_blank"
  rel="noopener noreferrer"
  className="cta-primary flex items-center justify-center gap-3 rounded-full bg-green-500 hover:bg-green-600 px-10 py-4 text-base font-bold text-white transition-all duration-200 hover:scale-105"
>
  <FaWhatsapp size={22} />
  Book on WhatsApp
</a>

          {/* Call */}
          
            <a href="tel:+234XXXXXXXXXX"
            className="cta-primary flex items-center justify-center gap-3 rounded-full border border-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black px-10 py-4 text-base font-bold transition-all duration-200 hover:scale-105"
          >
            <FaPhoneAlt size={22} />
            Call Now
          </a>

        </div>

        {/* Divider */}
        <div className="mt-12 flex items-center gap-4 w-full max-w-xs opacity-40">
          <div className="flex-1 h-px bg-white" />
          <span className="text-xs uppercase tracking-widest">Follow Us</span>
          <div className="flex-1 h-px bg-white" />
        </div>

        {/* Social Icons — smaller */}
        <div className="mt-6 flex gap-3">
          {socials.map((s) => (
            
             <a key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="cta-social flex items-center justify-center w-8 h-8 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}