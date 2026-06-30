"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".form-field", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    // We'll connect this to Resend later.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Thank you! Your message has been sent.");

    e.currentTarget.reset();

    setLoading(false);
  }

  return (
    <section ref={sectionRef} className="w-full py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <h2 className="form-title text-4xl font-bold md:text-5xl">
            Send Us A Message
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-80">
            Tell us about your vehicle and the service you're interested in. Our
            team will get back to you as soon as possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border p-8 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="form-field">
              <label className="mb-2 block font-medium">Full Name</label>

              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full rounded-xl border bg-transparent p-4 outline-none transition focus:border-red-700"
              />
            </div>

            <div className="form-field">
              <label className="mb-2 block font-medium">Email Address</label>

              <input
                type="email"
                required
                placeholder="john@email.com"
                className="w-full rounded-xl border bg-transparent p-4 outline-none transition focus:border-red-700"
              />
            </div>

            <div className="form-field">
              <label className="mb-2 block font-medium">Phone Number</label>

              <input
                type="tel"
                placeholder="+234..."
                className="w-full rounded-xl border bg-transparent p-4 outline-none transition focus:border-red-700"
              />
            </div>

            <div className="form-field">
              <label className="mb-2 block font-medium">Vehicle</label>

              <input
                type="text"
                placeholder="Toyota Camry 2018"
                className="w-full rounded-xl border bg-transparent p-4 outline-none transition focus:border-red-700"
              />
            </div>

            <div className="form-field md:col-span-2">
              <label className="mb-2 block font-medium">
                Service Interested In
              </label>

              <select className="w-full rounded-xl border bg-transparent p-4 outline-none transition focus:border-red-700">
                <option>Auto Repairs</option>
                <option>Vehicle Diagnostics</option>
                <option>Infotainment Installation</option>
                <option>Vehicle Upgrades</option>
                <option>Car Tinting</option>
                <option>Car Detailing</option>
              </select>
            </div>

            <div className="form-field md:col-span-2">
              <label className="mb-2 block font-medium">Message</label>

              <textarea
                rows={7}
                placeholder="Tell us more about your vehicle..."
                className="w-full rounded-xl border bg-transparent p-4 outline-none transition focus:border-red-700"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 flex items-center gap-3 rounded-full bg-red-700 px-8 py-4 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <FaPaperPlane />

            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
