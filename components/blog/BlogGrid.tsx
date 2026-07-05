import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { postsQuery } from "@/lib/qurries";

export default async function BlogGrid() {
  const posts = await client.fetch(postsQuery);

  if (!posts?.length) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <p className="mt-6 opacity-70">
            No blog posts have been published yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Latest Articles</h2>

          <p className="mt-4 max-w-2xl txt3">
            Stay updated with expert tips, vehicle maintenance advice,
            diagnostics, infotainment upgrades and everything automotive.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post: any) => (
            <article
              key={post._id}
              className="overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-2 gd"
            >
              <Link href={`/blog/${post.slug.current}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={urlFor(post.coverImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.categories?.map((category: any) => (
                    <span
                      key={category.title}
                      className="rounded-full border px-3 py-1 text-xs"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>

                <h3 className="line-clamp-2 text-2xl font-bold tt3">
                  {post.title}
                </h3>

                <p className="mt-4 line-clamp-3 txt3">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm opacity-70">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>

                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="font-semibold btn1"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}