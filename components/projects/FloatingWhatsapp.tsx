"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  project: string;
}

export default function FloatingWhatsapp({ project }: Props) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const message = encodeURIComponent(
    `Hello Favouritech Auto Concepts, I'm interested in your "${project}" project and would like to make an enquiry.`,
  );

  return (
    <a
      ref={buttonRef}
      href={`https://wa.me/234XXXXXXXXXX?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-xl"
    >
      <FaWhatsapp />
    </a>
  );
}
