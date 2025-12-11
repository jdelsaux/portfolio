import { profileData } from "@/lib/data"
import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Server,
  Cloud,
  Database,
  MessageSquareCodeIcon,Kanban
} from "lucide-react"

const icons = {
  "Front-end": Code2,
  "Back-end": Server,
  Cloud: Cloud,
  "Base de données": Database,
  "Methodologies": Kanban,
  "Even Driven": MessageSquareCodeIcon,

}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Expertise" subtitle="Mes domaines de compétences" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.expertise.map((item) => {
            const Icon = icons[item.title as keyof typeof icons]
            return (
              <Card key={item.title} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-center">
                    {item.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
