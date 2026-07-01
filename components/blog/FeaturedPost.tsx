import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";

import { client } from "@/lib/sanity.client";
import { featuredPostQuery } from "@/lib/qurries";
import { urlFor } from "@/lib/sanity.image";

export default async function FeaturedPost() {
  const post = await client.fetch(featuredPostQuery);

  if (!post) return null;

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <span className="rounded-full border px-4 py-2 text-sm font-semibold">
            Featured Article
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">Editor's Pick</h2>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[500px] overflow-hidden rounded-[20px]">
            <Image
              src={urlFor(post.coverImage).url()}
              alt={post.title}
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            {post.categories?.[0] && (
              <span className="rounded-full border px-4 py-2 text-sm">
                {post.categories[0].title}
              </span>
            )}

            <h3 className="mt-6 text-4xl font-bold leading-tight">
              {post.title}
            </h3>

            <p className="mt-6 text-lg opacity-80">{post.excerpt}</p>

            <div className="mt-8 flex flex-wrap gap-8 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <FaUser />
                {post.author?.name}
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
            </div>

            <Link
              href={`/blog/${post.slug.current}`}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#b0060d] px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Read Article
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
