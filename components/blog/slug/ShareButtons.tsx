"use client";

import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

interface Props {
  title: string;
}

export default function ShareButtons({ title }: Props) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <section className="mt-20">
      <h3 className="mb-6 text-2xl font-bold">Share this article</h3>

      <div className="flex flex-wrap gap-4">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            title + " " + shareUrl,
          )}`}
          target="_blank"
          className="rounded-full border p-4 transition hover:scale-110"
        >
          <FaWhatsapp size={22} />
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl,
          )}`}
          target="_blank"
          className="rounded-full border p-4 transition hover:scale-110"
        >
          <FaFacebookF size={20} />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title,
          )}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          className="rounded-full border p-4 transition hover:scale-110"
        >
          <FaXTwitter size={20} />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            shareUrl,
          )}`}
          target="_blank"
          className="rounded-full border p-4 transition hover:scale-110"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </section>
  );
}
