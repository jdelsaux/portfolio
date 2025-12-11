import {profileData} from "@/lib/data"
import {SectionTitle} from "@/components/ui/section-title"
import {Card, CardContent} from "@/components/ui/card"
import {Mail, MapPin, Phone} from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Contact" subtitle="Travaillons ensemble"/>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Coordonnées</h3>

                    <div className="space-y-4">
                      <a
                          href={`mailto:${profileData.email}`}
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div
                            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-primary"/>
                        </div>
                        <span>{profileData.email}</span>
                      </a>

                      <a
                          href={`tel:${profileData.phone}`}
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div
                            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary"/>
                        </div>
                        <span>{profileData.phone}</span>
                      </a>

                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div
                            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary"/>
                        </div>
                        <span>{profileData.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Retrouvez-moi</h3>

                    <div className="space-y-3">
                      <a
                          href={profileData.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#007EBB]">
                          <Image src="/images/linkedin.png" alt="Linkedin" width={24} height={24}/>
                        </div>
                        <span>LinkedIn</span>
                      </a>

                      <a
                          href={profileData.links.malt}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div
                            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                          <Image src="/images/malt.png" alt="Malt" width={24} height={24}/>
                        </div>
                        <span>Malt</span>
                      </a>

                      <a
                          href={profileData.links.collective}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div
                            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                          <Image src="/images/collective.png" alt="Collective" width={24}
                                 height={24}/>
                        </div>
                        <span>Collective</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}
