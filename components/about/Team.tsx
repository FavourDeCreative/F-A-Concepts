"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const team = [
  {
    name: "John Doe",
    role: "Founder & Lead Technician",
    image: "/team/team1.jpg",
  },
  {
    name: "Michael James",
    role: "Auto Electrical Specialist",
    image: "/team/team2.jpg",
  },
  {
    name: "Daniel Wilson",
    role: "Infotainment & Upgrades",
    image: "/team/team3.jpg",
  },
  {
    name: "Samuel Brown",
    role: "Customer Support",
    image: "/team/team4.jpg",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".team-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
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
          <span className="rounded-full border px-5 py-2 text-sm font-semibold">
            OUR TEAM
          </span>

          <h2 className="team-title mt-6 text-4xl font-bold md:text-5xl">
            Meet The Experts
            <br />
            Behind Favouritech Auto Concepts
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 opacity-80">
            Our experienced professionals are passionate about delivering
            reliable repairs, premium upgrades, and exceptional customer service
            for every vehicle that enters our workshop.
          </p>
        </div>

        {/* Team */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card group overflow-hidden rounded-[25px] border transition duration-300 hover:-translate-y-3"
            >
              {/* Image */}

              <div className="relative h-96 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-2xl font-semibold">{member.name}</h3>

                <p className="mt-2 opacity-70">{member.role}</p>

                {/* Socials */}

                <div className="mt-6 flex gap-4">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-red-700 hover:text-white"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-red-700 hover:text-white"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-red-700 hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
