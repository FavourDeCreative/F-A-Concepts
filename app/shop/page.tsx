import Link from "next/link";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";

export default function ShopPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-32">
      <div className="max-w-3xl text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#b0060d]/10">
          <FaShoppingBag className="text-4xl text-[#b0060d]" />
        </div>

        <h1 className="mt-8 text-5xl font-bold">Online Shop Coming Soon</h1>

        <p className="mt-6 text-lg opacity-80">
          We're working on an online store where you'll be able to purchase
          vehicle accessories, infotainment systems, lighting kits, detailing
          products, and more.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[#b0060d] px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Back Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border px-8 py-4 font-semibold transition hover:scale-105"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
