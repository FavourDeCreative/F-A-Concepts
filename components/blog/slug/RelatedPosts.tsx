import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/lib/sanity.image";

interface Props {
  posts: any[];
}

export default function RelatedPosts({ posts }: Props) {
  if (!posts?.length) return null;

  return (
    <section className="mt-24">
      <h2 className="mb-10 text-4xl font-bold">Related Articles</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group overflow-hidden rounded-[20px] border"
          >
            <div className="relative h-64">
              <Image
                src={urlFor(post.coverImage).url()}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{post.title}</h3>

              <p className="mt-4 line-clamp-3 opacity-80">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
