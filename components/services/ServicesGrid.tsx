import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { client } from "@/lib/sanity.client";
import { servicesQuery } from "@/lib/qurries";
import { urlFor } from "@/lib/sanity.image";

export default async function ServicesGrid() {
  const services = await client.fetch(servicesQuery);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold txt2">What We Do</h2>

          <p className="mx-auto mt-5 max-w-2xl opacity-80">
            From diagnostics and repairs to premium upgrades, we help transform
            your driving experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service: any) => (
            <Link
              key={service._id}
              href={`/services/${service.slug.current}`}
              className="group overflow-hidden rounded-3xl transition hover:-translate-y-2 gd"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={urlFor(service.coverImage).url()}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold tt3">{service.title}</h3>

                <p className="mt-4 line-clamp-3 opacity-80">
                  {service.shortDescription}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-4 btn1 border rounded-full px-2 py-1">
                  Learn More
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
