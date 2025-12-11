import { profileData } from "@/lib/data"
import { SectionTitle } from "@/components/ui/section-title"
import { SkillBadge } from "@/components/ui/skill-badge"

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Compétences Techniques" subtitle="Technologies et outils maîtrisés" />

        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(profileData.skills).map(([category, skills]) => (
            <div key={category} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
