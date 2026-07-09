import Image from 'next/image'

type ImgProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  /** Set true for above-the-fold images (for example the hero) to skip lazy loading. */
  priority?: boolean
  sizes?: string
}

/**
 * Thin wrapper around next/image.
 *
 * - Real photos (.jpg/.png/.webp) are optimized and lazy-loaded automatically.
 * - The branded placeholder SVGs we ship are passed through unoptimized (Next
 *   does not resize vector art), but still get lazy loading and correct sizing.
 *
 * When you swap a placeholder .svg for a real .jpg, this component just works:
 * the real image is optimized with no code change. Always provide descriptive,
 * keyword-aware alt text.
 */
export function Img({ src, alt, width, height, className, priority = false, sizes }: ImgProps) {
  const isSvg = src.toLowerCase().endsWith('.svg')
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      unoptimized={isSvg}
    />
  )
}
