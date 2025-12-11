import {profileData} from "@/lib/data"
import {SectionTitle} from "@/components/ui/section-title"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Award, GraduationCap, Languages} from "lucide-react"

export function EducationSection() {
  return (
      <section id="education" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Formation & Certifications" subtitle="Mon parcours académique"/>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Certification */}
            <Card className="border-border">
              <CardHeader>
                <div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary"/>
                </div>
                <CardTitle className="text-lg">Certification / Formation</CardTitle>
              </CardHeader>
              {profileData.certification.map((certification) => (
                  <li key={certification.title} className="flex justify-between">
                    <CardContent>
                      <p className="font-medium text-foreground">{certification.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{certification.issuer}</p>
                      <p className="text-sm text-primary mt-2">{certification.date}</p>
                    </CardContent>
                  </li>
              ))}
            </Card>

            {/* Diplôme */}
            <Card className="border-border">
              <CardHeader>
                <div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary"/>
                </div>
                <CardTitle className="text-lg">Diplôme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-foreground">{profileData.education.degree}</p>
                <p className="text-sm text-muted-foreground mt-1">{profileData.education.school}</p>
                <p className="text-sm text-primary mt-2">{profileData.education.years}</p>
              </CardContent>
            </Card>

            {/* Langues */}
            <Card className="border-border">
              <CardHeader>
                <div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Languages className="w-6 h-6 text-primary"/>
                </div>
                <CardTitle className="text-lg">Langues</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {profileData.languages.map((lang) => (
                      <li key={lang.name} className="flex justify-between">
                        <span className="text-foreground">{lang.name}</span>
                        <span className="text-muted-foreground">{lang.level}</span>
                      </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}
