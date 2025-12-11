interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
      <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
    </div>
  )
}
