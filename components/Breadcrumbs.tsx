import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'

export type Crumb = { name: string; path: string }

/**
 * Accessible breadcrumb trail plus matching BreadcrumbList JSON-LD.
 * Always include Home as the first crumb; the current page is the last and is
 * not a link.
 */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="container-x pt-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-charcoal/60">
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1
            return (
              <li key={c.path} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-charcoal">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-taco hover:underline">
                    {c.name}
                  </Link>
                )}
                {!isLast && <span aria-hidden="true">/</span>}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  )
}
