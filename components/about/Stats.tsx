"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaCarSide, FaUsers, FaTools, FaAward } from "react-icons/fa";

const stats = [
  {
    icon: <FaCarSide size={36} />,
    number: 500,
    suffix: "+",
    label: "Vehicles Serviced",
  },
  {
    icon: <FaAward size={36} />,
    number: 8,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: <FaUsers size={36} />,
    number: 98,
    suffix: "%",
    label: "Customer Satisfaction",
  },
  {
    icon: <FaTools size={36} />,
    number: 25,
    suffix: "+",
    label: "Automotive Services",
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stats-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".stat-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
      });

      const counters = document.querySelectorAll(".counter");

      counters.forEach((counter) => {
        const target = Number(counter.getAttribute("data-target"));

        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full border px-5 py-2 text-sm font-semibold">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="stats-title mt-6 text-4xl font-bold md:text-5xl">
            Trusted By Hundreds
            <br />
            Of Vehicle Owners
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 opacity-80">
            Our commitment to quality workmanship, customer satisfaction, and
            reliable automotive solutions has earned us the trust of drivers
            across Nigeria.
          </p>
        </div>

        {/* Stats */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card rounded-[25px] border p-10 text-center transition duration-300 hover:-translate-y-2"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-700 text-white">
                {stat.icon}
              </div>

              <h3 className="text-5xl font-bold">
                <span className="counter" data-target={stat.number}>
                  0
                </span>
                {stat.suffix}
              </h3>

              <p className="mt-4 text-lg opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
