"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "David O.",
    avatar: "/testimonials/david.jpg",
    title: "Car Enthusiast",
    date: "March 2025",
    message:
      "FAC upgraded my car infotainment system perfectly. The job was clean and professional.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    avatar: "/testimonials/sarah.jpg",
    title: "Business Executive",
    date: "January 2025",
    message:
      "Best auto workshop experience I've had. My car tint looks premium and heat reduction is insane.",
    rating: 5,
  },
  {
    name: "Michael T.",
    avatar: "/testimonials/michael.jpg",
    title: "Fleet Manager",
    date: "February 2025",
    message:
      "They diagnosed my electrical issue quickly when others couldn't. Highly recommended.",
    rating: 5,
  },
  {
    name: "James A.",
    avatar: "/testimonials/james.jpg",
    title: "Mercedes Owner",
    date: "April 2025",
    message:
      "My Mercedes ambient lighting upgrade came out better than I expected. Top-notch service.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // Entry animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".test-title", { y: 40, opacity: 0, duration: 1 });
      gsap.from(".test-card", { y: 30, opacity: 0, duration: 1, delay: 0.3 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const animateCard = (callback: () => void) => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        callback();
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
        );
      },
    });
  };

  const prev = () => {
    animateCard(() =>
      setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)),
    );
  };

  const next = () => {
    animateCard(() =>
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)),
    );
  };

  const t = testimonials[current];

  return (
    <section ref={sectionRef} className="w-full py-24 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="test-title text-4xl md:text-5xl font-bold">
          What Clients Say
        </h2>
        <p className="mt-4 text-lg opacity-80">
          Real feedback from FAC customers
        </p>
      </div>

      {/* Card + Controls */}
      <div className="flex items-center justify-center gap-6 md:gap-10">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="rounded-full border bg-white/10 backdrop-blur-md p-4 hover:bg-white/20 transition"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Card */}
        <div
          ref={cardRef}
          className="test-card w-full max-w-lg rounded-2xl border bg-white/5 backdrop-blur-md p-8 flex flex-col gap-5"
        >
          {/* Quote */}
          <FaQuoteLeft className="opacity-60 text-2xl" />

          {/* Message */}
          <p className="text-sm leading-relaxed opacity-90">{t.message}</p>

          {/* Stars */}
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: t.rating }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Avatar + Name + Title + Date */}
          <div className="flex items-center gap-4 mt-2">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-xs opacity-60">{t.title}</p>
              <p className="text-xs opacity-50 mt-0.5">{t.date}</p>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="rounded-full border bg-white/10 backdrop-blur-md p-4 hover:bg-white/20 transition"
          aria-label="Next testimonial"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => animateCard(() => setCurrent(i))}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/30"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
