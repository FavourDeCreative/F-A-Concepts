"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  { title: "Auto Repairs", image: "/services/repair.jpg" },
  { title: "Infotainment Installation", image: "/services/infotainment.jpg" },
  { title: "Vehicle Upgrades", image: "/services/upgrade.jpg" },
  { title: "Car Tinting", image: "/services/tint.jpg" },
  { title: "Diagnostics", image: "/services/diagnostics.jpg" },
  { title: "Car Detailing", image: "/services/detailing.jpg" },
];

// Triple the list so there's always content on both sides
const loopedServices = [...services, ...services, ...services];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".service-card", {
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto scroll with GSAP — seamless infinite loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start at the middle set so user can scroll both ways
    const oneThird = container.scrollWidth / 3;
    container.scrollLeft = oneThird;

    // Auto-scroll tween
    tweenRef.current = gsap.to(container, {
      scrollLeft: oneThird * 2,
      duration: 18,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        container.scrollLeft = oneThird;
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 360;
    const oneThird = container.scrollWidth / 3;

    // Pause auto-scroll while user navigates
    tweenRef.current?.pause();

    const newPos =
      container.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    gsap.to(container, {
      scrollLeft: newPos,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        // Reset to middle if near edges
        if (container.scrollLeft >= oneThird * 2) {
          container.scrollLeft = oneThird;
        }
        if (container.scrollLeft <= 0) {
          container.scrollLeft = oneThird;
        }

        // Resume auto-scroll
        tweenRef.current = gsap.to(container, {
          scrollLeft: container.scrollLeft + oneThird,
          duration: 18,
          ease: "none",
          repeat: -1,
          onRepeat: () => {
            container.scrollLeft = oneThird;
          },
        });
      },
    });
  };

  return (
    <section ref={sectionRef} className="w-full py-20 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="service-title text-4xl md:text-5xl font-bold txt2">
          Our Services
        </h2>
        <p className="mt-4 text-lg opacity-80">Choose a service</p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white/10 backdrop-blur-md p-3"
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white/10 backdrop-blur-md p-3"
        >
          <FaChevronRight />
        </button>

        {/* Scroll Area — hide scrollbar */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-10 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loopedServices.map((service, index) => (
            <div
              key={index}
              className="service-card min-w-[280px] md:min-w-[340px] rounded-2xl border bg-white/5 backdrop-blur-md overflow-hidden flex-shrink-0 gd"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}
