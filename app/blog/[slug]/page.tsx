import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { FaCalendarAlt, FaChevronRight, FaClock, FaUser } from "react-icons/fa";
import ShareButtons from "@/components/blog/slug/ShareButtons";
import RelatedPosts from "@/components/blog/slug/RelatedPosts";

import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { postQuery, relatedPostsQuery } from "@/lib/qurries";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const [post, relatedPosts] = await Promise.all([
    client.fetch(postQuery, { slug }),
    client.fetch(relatedPostsQuery, { slug }),
  ]);

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Article Not Found</h1>
      </main>
    );
  }

  // Approximate reading time
  const bodyText =
    post.body
      ?.map((block: any) =>
        block.children?.map((child: any) => child.text).join(" "),
      )
      .join(" ") || "";

  const words = bodyText.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return (
    <main className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* ================= Breadcrumb ================= */}

        <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm opacity-70">
          <Link href="/">Home</Link>

          <FaChevronRight size={10} />

          <Link href="/blog">Blog</Link>

          <FaChevronRight size={10} />

          <span className="font-semibold text-white">{post.title}</span>
        </nav>

        {/* ================= Categories ================= */}

        <div className="mb-6 flex flex-wrap gap-3">
          {post.categories?.map((category: any) => (
            <span
              key={category.title}
              className="rounded-full border px-4 py-2 text-sm"
            >
              {category.title}
            </span>
          ))}
        </div>

        {/* ================= Title ================= */}

        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          {post.title}
        </h1>

        {/* ================= Excerpt ================= */}

        {post.excerpt && (
          <p className="mt-8 text-xl opacity-80">{post.excerpt}</p>
        )}

        {/* ================= Meta ================= */}

        <div className="mt-10 flex flex-wrap gap-8 border-y py-6">
          <div className="flex items-center gap-3">
            <FaUser />

            <div>
              <p className="text-sm opacity-70">Author</p>
              <p className="font-semibold">{post.author?.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt />

            <div>
              <p className="text-sm opacity-70">Published</p>
              <p className="font-semibold">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaClock />

            <div>
              <p className="text-sm opacity-70">Reading Time</p>
              <p className="font-semibold">{readingTime} min read</p>
            </div>
          </div>
        </div>

        {/* ================= Cover Image ================= */}

        <div className="relative mt-12 h-[550px] overflow-hidden rounded-[20px]">
          <Image
            src={urlFor(post.coverImage).url()}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ================= Article ================= */}

        <article className="prose prose-lg mt-16 max-w-none">
          <PortableText value={post.body} />
          <ShareButtons title={post.title} />
          <RelatedPosts posts={relatedPosts} />
        </article>
      </div>
    </main>
  );
}
