import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { client } from "@/lib/sanity.client";
import { servicesQuery } from "@/lib/qurries";
import { urlFor } from "@/lib/sanity.image";

export default async function OurServices() {
  const services = await client.fetch(servicesQuery);

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full border px-5 py-2 text-sm font-semibold">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Comprehensive Automotive Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 opacity-80">
            From routine maintenance to premium vehicle upgrades, we offer a
            complete range of automotive services designed to keep your vehicle
            performing at its best.
          </p>
        </div>

        {/* Services */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service: any) => (
            <article
              key={service._id}
              className="group overflow-hidden rounded-[25px] border transition duration-300 hover:-translate-y-3"
            >
              {/* Image */}

              <div className="relative h-72 overflow-hidden">
                <Image
                  src={urlFor(service.coverImage).url()}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-2xl font-semibold">{service.title}</h3>

                <p className="mt-4 line-clamp-3 leading-8 opacity-80">
                  {service.shortDescription}
                </p>

                <Link
                  href={`/services/${service.slug.current}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:gap-4"
                >
                  Learn More
                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Button */}

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full bg-red-700 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
          >
            View All Services
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
