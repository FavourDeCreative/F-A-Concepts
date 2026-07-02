"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/5 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">Favouritech Auto Concepts</h2>
          <p className="mt-3 text-sm opacity-80">
            Premium automotive repairs, upgrades, tinting and infotainment
            solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Auto Repairs</li>
            <li>Car Tinting</li>
            <li>Infotainment Install</li>
            <li>Vehicle Upgrades</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>

          <div className="flex gap-4 text-xl">
            <a href="https://www.instagram.com/favouritechautoconcepts">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1GJRQktXJY/">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/2349112718068">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t py-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} FAC - Favouritech Auto Concepts. All rights
        reserved.
      </div>
    </footer>
  );
}