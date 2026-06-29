"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".logo", { x: -50, opacity: 0, duration: 1 });
      gsap.from(".nav-item", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.2,
      });
      gsap.from(".cta-btn", { x: 50, opacity: 0, duration: 1, delay: 0.4 });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!sidebarRef.current) return;
    if (isOpen) {
      gsap.to(sidebarRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setScrolledPastHero(heroBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!logoRef.current) return;
    gsap.to(logoRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        gsap.to(logoRef.current, { opacity: 1, duration: 0.3 });
      },
    });
  }, [scrolledPastHero]);

  return (
    <>
      <header ref={navRef} className="fixed top-0 left-0 z-50 w-full px-6 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-1 backdrop-blur-md navi">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <Image
                ref={logoRef}
                src={scrolledPastHero ? "/logo1.png" : "/logo-wt.png"}
                alt="FAC Logo"
                width={60}
                height={30}
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    scrolledPastHero ? "tn" : "tt"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className={`cta-btn hidden md:block rounded-full px-6 py-3 text-sm font-semibold border transition-colors duration-200 ${
              scrolledPastHero ? "tb" : "tc"
            }`}
          >
            Get Info
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden text-2xl text-white transition-colors duration-200 ${scrolledPastHero ? "tn" : "tt"}`}
          >
            <FaBars />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 z-[60] h-screen w-[280px] translate-x-full border-l backdrop-blur-lg"
      >
        <div className="flex items-center justify-between p-6">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl text-white"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-full border border-white text-white px-6 py-3 text-center font-semibold hover:bg-white hover:text-black transition-colors duration-200"
          >
            Get Info
          </Link>
        </div>
      </div>
    </>
  );
}
