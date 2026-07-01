import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { projectsQuery } from "@/lib/qurries"; // Change this to match your actual filename

export default async function ProjectsGrid() {
  const projects = await client.fetch(projectsQuery);

  console.log(projects);

  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold md:text-5xl tt3">Completed Projects</h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-80">
            Explore some of the transformations we've completed for our
            customers—from diagnostics and repairs to infotainment systems,
            tinting, and premium vehicle upgrades.
          </p>
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-semibold">No Projects Yet</h3>

            <p className="mt-3 opacity-70">
              Publish a project in Sanity Studio and it will appear here.
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project: any) => (
            <article
              key={project._id}
              className="group overflow-hidden rounded-3xl border bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={urlFor(project.coverImage).url()}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="rounded-full border px-3 py-1 text-xs">
                  {project.service?.title}
                </span>

                <h3 className="mt-4 text-2xl font-semibold tt3">{project.title}</h3>

                {/* Vehicle */}
                <p className="mt-2 text-sm opacity-70">{project.vehicle}</p>

                {/* Completion Date */}
                {project.completedAt && (
                  <p className="mt-1 text-xs opacity-60">
                    Completed:{" "}
                    {new Date(project.completedAt).toLocaleDateString()}
                  </p>
                )}

                <Link
                  href={`/projects/${project.slug.current}`}
                  className="mt-6 inline-flex items-center gap-2 font-medium transition-all duration-300 hover:gap-4"
                >
                  View Project
                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
