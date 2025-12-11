interface SkillBadgeProps {
  skill: string
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border">
      {skill}
    </span>
  )
}
