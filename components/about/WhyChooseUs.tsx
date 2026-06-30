"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  FaUserCog,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaCarSide,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserCog size={32} />,
    title: "Experienced Technicians",
    description:
      "Our skilled professionals have the expertise to diagnose, repair, and upgrade a wide range of vehicles with precision.",
  },
  {
    icon: <FaTools size={32} />,
    title: "Modern Equipment",
    description:
      "We use advanced diagnostic tools and modern workshop equipment to ensure accurate and efficient service.",
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: "Quality Workmanship",
    description:
      "Every repair and installation is carried out with attention to detail, ensuring long-lasting results.",
  },
  {
    icon: <FaClock size={32} />,
    title: "Fast Turnaround",
    description:
      "We value your time and strive to complete every job promptly without compromising on quality.",
  },
  {
    icon: <FaHandshake size={32} />,
    title: "Customer Satisfaction",
    description:
      "Building lasting relationships through honest communication, transparency, and reliable service is our priority.",
  },
  {
    icon: <FaCarSide size={32} />,
    title: "Complete Auto Solutions",
    description:
      "From diagnostics and repairs to infotainment, tinting, detailing, and premium vehicle upgrades—we do it all.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".choose-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".choose-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.3,
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
            WHY CHOOSE US
          </span>

          <h2 className="choose-title mt-6 text-4xl font-bold md:text-5xl">
            Why Drivers Trust
            <br />
            Favouritech Auto Concepts
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 opacity-80">
            We combine technical expertise, premium equipment, and exceptional
            customer service to deliver automotive solutions you can rely on.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="choose-card group rounded-[25px] border p-8 transition-all duration-300 hover:-translate-y-3 hover:border-red-700"
            >
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-700 text-white transition duration-300 group-hover:scale-110">
                {reason.icon}
              </div>

              <h3 className="text-2xl font-semibold">{reason.title}</h3>

              <p className="mt-5 leading-8 opacity-80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
