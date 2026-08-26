"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

import {
  FaFileContract,
  FaArrowLeft,
  FaCar,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";

export default function TermsOfService() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".terms-animate",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-black text-white"
    >
      {/* HERO */}
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">

          <Link
            href="/"
            className="terms-animate inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition mb-10"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <div className="terms-animate flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center">
              <FaFileContract size={26} />
            </div>

            <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
              Legal
            </span>
          </div>

          <h1 className="terms-animate text-4xl md:text-6xl font-bold">
            Terms of Service
          </h1>

          <p className="terms-animate mt-5 text-gray-400 max-w-2xl leading-relaxed">
            These terms explain the rules and conditions that apply when
            you access our website, purchase products, or use the services
            provided by Favouritech Auto Concepts.
          </p>

          <p className="terms-animate mt-4 text-sm text-gray-500">
            Last updated: August 2026
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* HIGHLIGHTS */}
          <div className="terms-animate grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <FaCar className="text-red-500 mb-4" size={25} />

              <h3 className="font-semibold text-lg">
                Automotive Services
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Services are performed based on the condition and
                requirements of each vehicle.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <FaShoppingCart className="text-red-500 mb-4" size={25} />

              <h3 className="font-semibold text-lg">
                Orders & Products
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Product availability, pricing, delivery, and orders
                are subject to confirmation.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <FaTools className="text-red-500 mb-4" size={25} />

              <h3 className="font-semibold text-lg">
                Professional Service
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Our technicians work to provide professional automotive
                solutions for our customers.
              </p>
            </div>

          </div>

          {/* TERMS */}
          <article className="terms-animate bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 space-y-10">

            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Acceptance of Terms
              </h2>

              <p className="text-gray-400 leading-relaxed">
                By accessing or using this website, you agree to be
                bound by these Terms of Service. If you do not agree
                with these terms, please do not use the website or
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Our Services
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Favouritech Auto Concepts provides automotive services
                which may include vehicle diagnostics, parts replacement,
                infotainment installation, vehicle tracking, electrical
                services, ECU programming, key programming, and other
                automotive solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Vehicle Services
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Automotive repairs, diagnostics, installations, and
                modifications depend on the specific vehicle and its
                condition. Customers may be required to provide accurate
                vehicle information before work begins.
              </p>

              <p className="text-gray-400 leading-relaxed mt-4">
                Additional faults or issues discovered during inspection
                may require additional work or costs. Where applicable,
                customers will be informed before additional work is
                carried out.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Products and Parts
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Product descriptions, prices, availability, and images
                displayed on the website may change without prior notice.
                An order is not considered final until it has been
                confirmed by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Payments
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Customers are responsible for providing accurate payment
                and contact information. Where applicable, deposits or
                full payment may be required before a product or service
                is provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Appointments and Cancellations
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Appointments may be subject to availability. Customers
                should notify us as early as possible if they need to
                reschedule or cancel an appointment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Vehicle Tracking Services
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Vehicle tracking products and services may depend on
                GPS coverage, network availability, device functionality,
                subscription services, and other factors outside our
                control. Continuous availability of tracking information
                cannot be guaranteed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                8. Limitation of Liability
              </h2>

              <p className="text-gray-400 leading-relaxed">
                To the extent permitted by applicable law, Favouritech
                Auto Concepts shall not be responsible for losses resulting
                from circumstances outside our reasonable control,
                including third-party services, network failures,
                manufacturer defects, or inaccurate information supplied
                by a customer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                9. Website Usage
              </h2>

              <p className="text-gray-400 leading-relaxed">
                You agree not to misuse the website, attempt unauthorized
                access, interfere with its operation, distribute malicious
                software, or use the website for unlawful purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                10. Changes to These Terms
              </h2>

              <p className="text-gray-400 leading-relaxed">
                We may update these Terms of Service when necessary.
                Updated terms will be published on this page and will
                apply from the date they are posted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                11. Contact Us
              </h2>

              <p className="text-gray-400 leading-relaxed">
                If you have questions about these terms, please contact
                Favouritech Auto Concepts using the contact information
                provided on our website.
              </p>
            </section>

          </article>

          {/* BUTTONS */}
          <div className="terms-animate flex flex-wrap gap-4 pt-4">

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Back to Home
            </Link>

            <Link
              href="/privacy"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-zinc-700 text-white font-semibold hover:border-red-500 hover:text-red-500 transition"
            >
              Privacy Policy
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}