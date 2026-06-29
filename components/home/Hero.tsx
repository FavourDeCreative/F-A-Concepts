"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaCalendarCheck, FaStore } from "react-icons/fa";

export default function Hero() {
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
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h1 className="hero-title text-5xl font-bold md:text-7xl txt">
          Welcome to <br></br>
          <span className="txt2">Favouritech Auto Concepts</span>
        </h1>

        <p className="hero-text mt-6 max-w-2xl text-lg md:text-xl">
          Driving Innovation. Enhancing Performance.
        </p>

        <div className="hero-buttons mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold transition btn1">
            <FaCalendarCheck size={18} />
            Book An Appointment
          </button>

          <button className="flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold transition btn2">
            <FaStore size={18} />
            Visit Our Shop
          </button>
        </div>
      </div>
    </section>
  );
}
