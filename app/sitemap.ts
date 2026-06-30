import type { MetadataRoute } from "next";

import { client } from "@/lib/sanity.client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://yourdomain.com";

  const services = await client.fetch(`
    *[_type=="service"]{
      "slug": slug.current
    }
  `);

  const projects = await client.fetch(`
    *[_type=="project"]{
      "slug": slug.current
    }
  `);

  const posts = await client.fetch(`
    *[_type=="post"]{
      "slug": slug.current
    }
  `);

  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  const servicePages = services.map((service: any) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectPages = projects.map((project: any) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...blogPages];
}
