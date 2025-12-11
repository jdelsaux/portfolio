import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SkillBadge } from "@/components/ui/skill-badge"
import { MapPin, Calendar, Building2, Briefcase } from "lucide-react"

interface Project {
  company: string
  type: string
  position: string
  startDate: string
  endDate: string
  location: string
  workMode: string
  companyDescription: string
  consultingWork: string
  tasks: string[]
  skills: string[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="border-border hover:border-primary/30 transition-colors">
      <CardHeader className="pb-4">
        {/* Header with company info on left, date/location on right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">{project.company}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {project.type}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">{project.position}</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {project.startDate} – {project.endDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            <span className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">{project.workMode}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Company Description */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-1">À propos de l&apos;entreprise</h4>
          <p className="text-sm text-muted-foreground">{project.companyDescription}</p>
        </div>

        {/* Consulting Work */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-1">Mission de consulting</h4>
          <p className="text-sm text-muted-foreground">{project.consultingWork}</p>
        </div>

        {/* Tasks */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Tâches réalisées</h4>
          <ul className="space-y-2">
            {project.tasks.map((task, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Compétences utilisées</h4>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
