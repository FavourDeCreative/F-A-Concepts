"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
export default function ProjectsHero() {
    const heroRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".projects-breadcrumb", {
                y: -20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });
            gsap.from(".projects-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
            });
            gsap.from(".projects-text", {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.4,
                ease: "power3.out",
            });
            gsap.from(".projects-btn", {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.6,
                ease: "power3.out",
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);
    return (
        <section
            ref={heroRef}
            className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden" id="hero"
        >
            {" "}
            {/* Background */}{" "}
            <img
                src="/projects/project-hero.jpg"
                alt="FAC Projects"
                className="absolute inset-0 h-full w-full object-cover"
            />{" "}
            {/* Overlay */} <div className="absolute inset-0 bg-black/60" />{" "}
            {/* Content */}{" "}
            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
                {" "}
                {/* Breadcrumb */}{" "}
                <div className="projects-breadcrumb mb-6 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
                    {" "}
                    <span className="text-sm"> Home / Projects </span>{" "}
                </div>{" "}
                <h1 className="projects-title text-5xl font-bold md:text-6xl lg:text-7xl tt3">
                    {" "}
                    Our Projects{" "}
                </h1>{" "}
                <p className="projects-text mt-6 max-w-3xl text-lg md:text-xl txt">
                    {" "}
                    Every vehicle tells a story. Explore our portfolio of completed
                    automotive upgrades, repairs, diagnostics, tinting, infotainment
                    installations, and premium customizations carried out by Favouritech
                    Auto Concepts.{" "}
                </p>{" "}
                <Link
                    href="/contact"
                    className="projects-btn mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 btn1"
                >
                    {" "}
                    Start Your Project <FaArrowRight />{" "}
                </Link>{" "}
            </div>{" "}
        </section>
    );
}
