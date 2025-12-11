import { profileData } from "@/lib/data"
import { SectionTitle } from "@/components/ui/section-title"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="À propos" subtitle="Mon parcours et ma vision" />

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">{profileData.about}</p>

          <div className="bg-secondary/50 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Ce qui me caractérise :</h3>
            <ul className="space-y-4">
              {profileData.characteristics.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
