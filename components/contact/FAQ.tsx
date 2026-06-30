"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Appointments are recommended to ensure we can attend to your vehicle promptly, but walk-ins are also welcome depending on availability.",
  },
  {
    question: "What types of vehicles do you service?",
    answer:
      "We work on a wide range of vehicles including Toyota, Honda, Lexus, Mercedes-Benz, BMW, Ford, Hyundai, Kia, and many others.",
  },
  {
    question: "How long does vehicle diagnostics take?",
    answer:
      "Most diagnostics are completed within 30 to 60 minutes, depending on the complexity of the issue.",
  },
  {
    question: "Do you install Android screens and reverse cameras?",
    answer:
      "Yes. We professionally install Android infotainment systems, reverse cameras, parking sensors, dash cameras, and other automotive electronics.",
  },
  {
    question: "Do you offer vehicle upgrades?",
    answer:
      "Absolutely. We provide ambient lighting, infotainment upgrades, sound system installations, electrical upgrades, tinting, detailing, and more.",
  },
  {
    question: "Can I get a quotation before work begins?",
    answer:
      "Yes. After inspecting your vehicle, we'll provide a detailed quotation before any work is carried out.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".faq-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <h2 className="faq-title text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-80">
            Find answers to the most common questions about our automotive
            services and how we can help you.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="faq-item overflow-hidden rounded-2xl border"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>

                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ${
                    isOpen
                      ? "max-h-96 px-6 pb-6 opacity-100"
                      : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  <p className="leading-8 opacity-80">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
