import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { FaCalendarAlt, FaCar } from "react-icons/fa";

import { client } from "@/lib/sanity.client";
import { projectQuery } from "@/lib/qurries";
import { urlFor } from "@/lib/sanity.image";

import ProjectBreadcrumb from "@/components/projects/ProjectBreadcrumb";
import ProjectGallery from "@/components/projects/ProjectGallery";
import RelatedProjects from "@/components/projects/RelatedProjects";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import FloatingWhatsapp from "@/components/projects/FloatingWhatsapp";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// =======================
// Dynamic SEO
// =======================

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = await client.fetch(projectQuery, { slug });

  if (!project) {
    return {
      title: "Project Not Found | Favouritech Auto Concepts",
    };
  }

  return {
    title: `${project.title} | Favouritech Auto Concepts`,
    description: `Discover how Favouritech Auto Concepts completed ${project.title}.`,
    openGraph: {
      title: project.title,
      description: `Explore ${project.title} by Favouritech Auto Concepts.`,
      images: [urlFor(project.coverImage).url()],
    },
  };
}

// =======================
// Page
// =======================

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = await client.fetch(projectQuery, {
    slug,
  });

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
      </main>
    );
  }

  return (
    <>
      <main className="w-full py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}

          <ProjectBreadcrumb
            service={project.service?.title}
            title={project.title}
          />

          {/* Cover Image */}

          <div className="relative h-[550px] overflow-hidden rounded-[15px]">
            <Image
              src={urlFor(project.coverImage).url()}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Header */}

          <section className="mt-10">
            <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium" id="hero">
              {project.service?.title}
            </span>

            <h1 className="mt-5 text-4xl font-bold md:text-6xl">
              {project.title}
            </h1>
          </section>

          {/* Details */}

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[15px] border p-6">
              <div className="flex items-center gap-3">
                <FaCar />

                <h3 className="font-semibold">Vehicle</h3>
              </div>

              <p className="mt-3 text-lg">{project.vehicle}</p>
            </div>

            <div className="rounded-[15px] border p-6">
              <div className="flex items-center gap-3">
                <FaCalendarAlt />

                <h3 className="font-semibold">Completion Date</h3>
              </div>

              <p className="mt-3 text-lg">
                {new Date(project.completedAt).toLocaleDateString()}
              </p>
            </div>
          </section>

          {/* Overview */}

          <section className="mt-20">
            <h2 className="mb-8 text-3xl font-bold">Project Overview</h2>

            <article className="prose max-w-none">
              <PortableText value={project.description} />
            </article>
          </section>

          {/* Gallery */}

          <ProjectGallery images={project.gallery} title={project.title} />

          {/* Previous / Next */}

          <ProjectNavigation completedAt={project.completedAt} />

          {/* Related Projects */}

          <RelatedProjects slug={slug} />

          {/* CTA */}

          <section className="mt-24 rounded-[15px] border p-12 text-center">
            <h2 className="text-4xl font-bold">
              Ready to Upgrade Your Vehicle?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl opacity-80">
              Whether you need diagnostics, infotainment installation, ambient
              lighting, electrical repairs, tinting or premium vehicle upgrades,
              Favouritech Auto Concepts is here to help transform your vehicle.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full border px-8 py-4 font-semibold transition hover:scale-105"
              >
                Book Appointment
              </Link>

              <Link
                href="/services"
                className="rounded-full border px-8 py-4 font-semibold transition hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Floating WhatsApp */}

      <FloatingWhatsapp project={project.title} />
    </>
  );
}
