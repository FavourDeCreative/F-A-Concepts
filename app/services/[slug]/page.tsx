import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { FaCheckCircle } from "react-icons/fa";

import { client } from "@/lib/sanity.client";
import { serviceQuery } from "@/lib/qurries";
import { urlFor } from "@/lib/sanity.image";

import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import ServiceProjects from "@/components/services/serviceProjects";
import RelatedServices from "@/components/services/RelatedServices";
import FloatingWhatsapp from "@/components/services/FloatingWhatsapp";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = await client.fetch(serviceQuery, { slug });

  return {
    title: `${service.title} | Favouritech Auto Concepts`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = await client.fetch(serviceQuery, {
    slug,
  });

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
      </main>
    );
  }

  return (
    <>
      <main className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ServiceBreadcrumb title={service.title} />

          <div className="relative h-[500px] overflow-hidden rounded-[20px]">
            <Image
              src={urlFor(service.coverImage).url()}
              alt={service.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <section className="mt-10">
            <h1 className="text-5xl font-bold">{service.title}</h1>

            <p className="mt-6 max-w-4xl text-lg opacity-80">
              {service.shortDescription}
            </p>
          </section>

          <section className="mt-20">
            <h2 className="mb-8 text-3xl font-bold">About This Service</h2>

            <article className="prose max-w-none">
              <PortableText value={service.description} />
            </article>
          </section>

          {service.benefits?.length > 0 && (
            <section className="mt-20">
              <h2 className="mb-8 text-3xl font-bold">Benefits</h2>

              <div className="grid gap-6 md:grid-cols-2">
                {service.benefits.map((benefit: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border p-6"
                  >
                    <FaCheckCircle className="text-green-500" />

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <ServiceProjects slug={slug} />

          <RelatedServices slug={slug} />

          <section className="mt-24 rounded-[20px] border p-12 text-center">
            <h2 className="text-4xl font-bold">Need This Service?</h2>

            <p className="mx-auto mt-5 max-w-3xl opacity-80">
              Book an appointment today and let our experts deliver professional
              automotive solutions tailored to your vehicle.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full border px-8 py-4 font-semibold"
              >
                Book Appointment
              </Link>

              <Link
                href="/projects"
                className="rounded-full border px-8 py-4 font-semibold"
              >
                View Our Projects
              </Link>
            </div>
          </section>
        </div>
      </main>

      <FloatingWhatsapp service={service.title} />
    </>
  );
}
