import Image from "next/image";
import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "./sanity.image";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-10">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ""}
          width={1200}
          height={700}
          className="rounded-2xl w-full h-auto"
        />
      </div>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="mt-12 mb-6 text-5xl font-bold">{children}</h1>
    ),

    h2: ({ children }) => (
      <h2 className="mt-12 mb-5 text-4xl font-bold">{children}</h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-3xl font-semibold">{children}</h3>
    ),

    h4: ({ children }) => (
      <h4 className="mt-8 mb-3 text-2xl font-semibold">{children}</h4>
    ),

    normal: ({ children }) => (
      <p className="mb-7 text-lg leading-9">{children}</p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-red-600 pl-6 italic">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-6 list-disc space-y-3 pl-6">{children}</ul>
    ),

    number: ({ children }) => (
      <ol className="my-6 list-decimal space-y-3 pl-6">{children}</ol>
    ),
  },

  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,

    em: ({ children }) => <em className="italic">{children}</em>,

    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;

      return (
        <Link
          href={value?.href}
          target={target}
          className="text-red-500 underline"
        >
          {children}
        </Link>
      );
    },
  },
};
