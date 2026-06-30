import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { client } from "@/lib/sanity.client";
import { relatedServicesQuery } from "@/lib/qurries";
import { urlFor } from "@/lib/sanity.image";

interface Props {
  slug: string;
}

export default async function RelatedServices({ slug }: Props) {
  const services = await client.fetch(relatedServicesQuery, { slug });

  if (!services.length) return null;

  return (
    <section className="mt-24">
      <div className="mb-10">
        <h2 className="text-4xl font-bold">Related Services</h2>

        <p className="mt-3 opacity-80">
          Explore more premium automotive solutions offered by Favouritech Auto
          Concepts.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service: any) => (
          <Link
            key={service._id}
            href={`/services/${service.slug.current}`}
            className="group overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={urlFor(service.coverImage).url()}
                alt={service.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">{service.title}</h3>

              <div className="mt-5 inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-4">
                Learn More
                <FaArrowRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
