import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { client } from "@/lib/sanity.client";
import { relatedProjectsQuery } from "@/lib/qurries";
import { urlFor } from "@/lib/sanity.image";

interface Props {
  slug: string;
}

export default async function RelatedProjects({ slug }: Props) {
  const projects = await client.fetch(relatedProjectsQuery, { slug });

  if (!projects.length) return null;

  return (
    <section className="mt-24">
      <h2 className="mb-10 text-3xl font-bold">Related Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: any) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug.current}`}
            className="group overflow-hidden rounded-3xl border transition hover:-translate-y-2"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={urlFor(project.coverImage).url()}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-2 opacity-70">{project.vehicle}</p>

              <div className="mt-6 inline-flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-4">
                View Project
                <FaArrowRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
