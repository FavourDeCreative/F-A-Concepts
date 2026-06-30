import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";

interface GalleryProps {
  images: any[];
  title: string;
}

export default function ProjectGallery({ images, title }: GalleryProps) {
  if (!images?.length) return null;

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">Project Gallery</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative h-72 overflow-hidden rounded-2xl"
          >
            <Image
              src={urlFor(image).url()}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
