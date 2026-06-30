"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  service: string;
}

export default function FloatingWhatsapp({ service }: Props) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.to(buttonRef.current, {
      scale: 1.08,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  const message = encodeURIComponent(
    `Hello Favouritech Auto Concepts, I'm interested in your ${service} service and would like to book an appointment.`,
  );

  return (
    <a
      ref={buttonRef}
      href={`https://wa.me/2348012345678?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}
