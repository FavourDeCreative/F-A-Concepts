import ProjectsHero from "@/components/projects/Hero";
import ProjectGrid from "@/components/projects/ProjectGrd";
import { main } from "framer-motion/client";
export default function ProjectsPage() {
    return(
        <main>
            <ProjectsHero />
            <ProjectGrid />
        </main>
    );
}