import { Button } from "@/components/ui/button"
import { profileData } from "@/lib/data"
import { MapPin, Calendar, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 min-h-[60vh] flex items-center">
      {/* Banner Background */}
      <div className="absolute inset-0 z-0">
        <Image src={profileData.banner} alt="Banner" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Avatar */}
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <Image
                src={profileData.avatar || "/placeholder.svg"}
                alt={profileData.name}
                width={256}
                height={256}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-balance">
              {profileData.name}
            </h1>
            <p className="text-xl md:text-2xl text-white font-semibold mb-2">{profileData.title}</p>
            <p className="text-lg text-white/90 mb-4">{profileData.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{profileData.availability}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                <a href={profileData.links.cv} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger Mon CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
