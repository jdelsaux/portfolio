import { projects } from "@/lib/data"
import { SectionTitle } from "@/components/ui/section-title"
import { ProjectCard } from "@/components/sections/project-card"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Expériences Professionnelles" subtitle="Plus de 15 ans d'expertise" />

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
