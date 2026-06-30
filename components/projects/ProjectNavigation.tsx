import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { previousProjectQuery, nextProjectQuery } from "@/lib/qurries";

interface Props {
  completedAt: string;
}

export default async function ProjectNavigation({ completedAt }: Props) {
  const previous = await client.fetch(previousProjectQuery, { completedAt });

  const next = await client.fetch(nextProjectQuery, { completedAt });

  return (
    <section className="mt-24 flex flex-col gap-8 border-t pt-10 md:flex-row md:justify-between">
      <div>
        {previous && (
          <>
            <p className="text-sm opacity-70">Previous Project</p>

            <Link
              href={`/projects/${previous.slug.current}`}
              className="mt-2 block text-xl font-semibold hover:underline"
            >
              ← {previous.title}
            </Link>
          </>
        )}
      </div>

      <div className="text-right">
        {next && (
          <>
            <p className="text-sm opacity-70">Next Project</p>

            <Link
              href={`/projects/${next.slug.current}`}
              className="mt-2 block text-xl font-semibold hover:underline"
            >
              {next.title} →
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
