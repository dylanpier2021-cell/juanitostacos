import type { MenuItem } from '@/siteConfig'

/** A single menu item: name, price and description, with a placeholder note if needed. */
export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <li className="card flex flex-col p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <span className="whitespace-nowrap rounded-full bg-cream px-3 py-1 font-display text-lg font-bold text-taco">
          {item.price}
        </span>
      </div>
      <p className="mt-3 text-charcoal/75">{item.description}</p>
      {item.placeholder && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-lime">
          Placeholder — confirm details and price
        </p>
      )}
    </li>
  )
}
