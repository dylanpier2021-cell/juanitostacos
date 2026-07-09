type SectionHeadingProps = {
  eyebrow?: string
  title: string
  /** Heading level for correct document outline. Defaults to h2. */
  as?: 'h2' | 'h3'
  intro?: string
  align?: 'left' | 'center'
  className?: string
}

/** Consistent section heading with optional eyebrow label and intro text. */
export function SectionHeading({
  eyebrow,
  title,
  as = 'h2',
  intro,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const Tag = as
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="mt-2 text-3xl sm:text-4xl">{title}</Tag>
      <div className={`mt-4 rule-masa ${align === 'center' ? 'mx-auto' : ''}`} />
      {intro && <p className="mt-4 text-lg leading-relaxed text-charcoal/75">{intro}</p>}
    </div>
  )
}
