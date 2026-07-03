"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaLink,
  FaCheck,
} from "react-icons/fa6";

interface Props {
  title: string;
}

export default function ShareButtons({ title }: Props) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <section className="mt-20">
      <h3 className="mb-6 text-2xl font-bold">Share this article</h3>

      <div className="flex flex-wrap gap-4">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `${title} ${shareUrl}`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border p-4 transition hover:scale-110"
        >
          <FaWhatsapp size={22} />
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border p-4 transition hover:scale-110"
        >
          <FaFacebookF size={20} />
        </a>

        {/* X */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title,
          )}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border p-4 transition hover:scale-110"
        >
          <FaXTwitter size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            shareUrl,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border p-4 transition hover:scale-110"
        >
          <FaLinkedinIn size={20} />
        </a>

        {/* Copy Link */}
        <button
          onClick={copyLink}
          aria-label="Copy article link"
          className="rounded-full border p-4 transition hover:scale-110"
        >
          {copied ? <FaCheck size={20} /> : <FaLink size={20} />}
        </button>
      </div>
    </section>
  );
}
