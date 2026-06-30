import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogSlugPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-32">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold">Article Coming Soon</h1>

        <p className="mt-6 text-lg opacity-80">
          This article hasn't been published yet. Stay tuned for informative
          automotive content from Favouritech Auto Concepts.
        </p>

        <Link
          href="/blog"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#b0060d] px-8 py-4 font-semibold text-white"
        >
          <FaArrowLeft />
          Back to Blog
        </Link>
      </div>
    </main>
  );
}
