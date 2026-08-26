"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import {
  FaShieldAlt,
  FaArrowLeft,
  FaLock,
  FaUserShield,
  FaDatabase,
} from "react-icons/fa";

export default function PrivacyPolicy() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".privacy-animate",
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
            className="privacy-animate inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition mb-10"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <div className="privacy-animate flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center">
              <FaShieldAlt size={26} />
            </div>

            <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
              Legal
            </span>
          </div>

          <h1 className="privacy-animate text-4xl md:text-6xl font-bold">
            Privacy Policy
          </h1>

          <p className="privacy-animate mt-5 text-gray-400 max-w-2xl leading-relaxed">
            Your privacy matters to us. This policy explains how
            Favouritech Auto Concepts collects, uses, protects, and
            handles information when you use our website and services.
          </p>

          <p className="privacy-animate mt-4 text-sm text-gray-500">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-8">

          <div className="privacy-animate grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <FaLock className="text-red-500 mb-4" size={25} />
              <h3 className="font-semibold text-lg">
                Secure Information
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                We take reasonable steps to protect information
                provided through our website.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <FaUserShield className="text-red-500 mb-4" size={25} />
              <h3 className="font-semibold text-lg">
                Your Privacy
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                We respect your personal information and do not
                sell it to third parties.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <FaDatabase className="text-red-500 mb-4" size={25} />
              <h3 className="font-semibold text-lg">
                Data Usage
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Information is used to provide and improve our
                automotive services.
              </p>
            </div>

          </div>

          <article className="privacy-animate bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 space-y-10">

            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Information We Collect
              </h2>

              <p className="text-gray-400 leading-relaxed">
                We may collect information you voluntarily provide when
                contacting us, requesting a service, purchasing a product,
                booking an appointment, or communicating with us.
              </p>

              <p className="text-gray-400 leading-relaxed mt-4">
                This may include your name, phone number, email address,
                vehicle information, delivery details, and other information
                necessary to provide our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. How We Use Your Information
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Information we collect may be used to process orders,
                respond to enquiries, provide automotive services,
                arrange deliveries, communicate with customers,
                improve our website, and maintain the security of our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Cookies
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Our website may use cookies and similar technologies to
                improve functionality, understand website usage, and
                provide a better experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Third-Party Services
              </h2>

              <p className="text-gray-400 leading-relaxed">
                We may use trusted third-party services for payment
                processing, analytics, hosting, communications, maps,
                advertising, or other website functionality. These
                providers may process information according to their
                own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Data Protection
              </h2>

              <p className="text-gray-400 leading-relaxed">
                We take reasonable administrative and technical measures
                to protect personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Your Rights
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Depending on applicable law, you may have rights relating
                to your personal information, including requesting access,
                correction, or deletion of certain information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Contact Us
              </h2>

              <p className="text-gray-400 leading-relaxed">
                If you have questions about this Privacy Policy or how
                your information is handled, please contact Favouritech
                Auto Concepts through the contact information provided
                on our website.
              </p>
            </section>

          </article>

          <div className="privacy-animate flex flex-wrap gap-4 pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Back to Home
            </Link>

            <Link
              href="/terms"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-zinc-700 text-white font-semibold hover:border-red-500 hover:text-red-500 transition"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}