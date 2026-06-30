import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface ServiceBreadcrumbProps {
  title: string;
}

export default function ServiceBreadcrumb({ title }: ServiceBreadcrumbProps) {
  return (
    <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm opacity-80">
      <Link href="/" className="transition hover:opacity-100">
        Home
      </Link>

      <FaChevronRight size={10} />

      <Link href="/services" className="transition hover:opacity-100">
        Services
      </Link>

      <FaChevronRight size={10} />

      <span className="font-semibold opacity-100">{title}</span>
    </nav>
  );
}
