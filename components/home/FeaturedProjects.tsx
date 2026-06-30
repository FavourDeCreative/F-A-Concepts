"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Mercedes-Benz Ambient Lighting Upgrade",
    image: "/projects/benz-light.jpg",
    tag: "Vehicle Upgrade",
  },
  {
    title: "Toyota Camry Android Screen Installation",
    image: "/projects/camry-screen.jpg",
    tag: "Infotainment",
  },
  {
    title: "Lexus RX350 Ceramic Tint Job",
    image: "/projects/lexus-tint.jpg",
    tag: "Car Tinting",
  },
  {
    title: "Honda Accord Full Electrical Diagnostics",
    image: "/projects/honda-diagnostic.jpg",
    tag: "Diagnostics",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".project-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 px-6">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="project-title text-4xl md:text-5xl font-bold txt2">
          Featured Projects
        </h2>

        <p className="project-subtitle mt-4 text-lg opacity-80">
          Real work. Real transformations.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card group relative overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-md"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay content */}
            <div className="p-5">
              <span className="text-xs opacity-70">
                {project.tag}
              </span>

              <h3 className="mt-2 text-lg font-semibold leading-snug">
                {project.title}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-sm opacity-80 group-hover:opacity-100 transition">
                View Project <FaArrowRight />
              </div>
            </div>

            {/* hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}

      </div>
    </section>
  );
}