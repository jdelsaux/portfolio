import { profileData } from "@/lib/data"
import { Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-primary">{profileData.company}</p>
            <p className="text-sm text-background/70 mt-1">{profileData.title}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors bg-[#007EBB]"
              aria-label="LinkedIn"
            >
              <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a
              href={profileData.links.malt}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors overflow-hidden"
              aria-label="Malt"
            >
              <Image src="/images/malt.png" alt="Malt" width={24} height={24} />
            </a>
            <a
              href={profileData.links.collective}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors overflow-hidden"
              aria-label="Collective"
            >
              <Image src="/images/collective.png" alt="Collective" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <p className="text-sm text-background/70">
            © {currentYear} {profileData.company}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
