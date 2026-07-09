import { siteConfig, fullAddress } from '@/siteConfig'
import { telHref, mailtoHref, directionsHref } from '@/lib/links'
import { PhoneIcon, PinIcon, ClockIcon, MailIcon } from '@/components/icons'

/**
 * Compact "find us" card: address, hours, phone and email. Reused on the home,
 * contact and location pages so the NAP is always identical.
 */
export function InfoCard({ className = '' }: { className?: string }) {
  return (
    <div className={`card p-6 sm:p-8 ${className}`}>
      <h2 className="text-2xl font-bold">Find Juanito&apos;s Tacos</h2>
      <dl className="mt-6 space-y-5 text-charcoal/85">
        <div className="flex gap-4">
          <PinIcon className="mt-0.5 h-6 w-6 flex-none text-taco" />
          <div>
            <dt className="font-semibold text-charcoal">Address</dt>
            <dd>
              <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="hover:text-taco hover:underline">
                {fullAddress}
              </a>
            </dd>
          </div>
        </div>
        <div className="flex gap-4">
          <ClockIcon className="mt-0.5 h-6 w-6 flex-none text-taco" />
          <div>
            <dt className="font-semibold text-charcoal">Hours</dt>
            <dd>
              {siteConfig.hours.daysDisplay}
              <br />
              {siteConfig.hours.display}
            </dd>
          </div>
        </div>
        <div className="flex gap-4">
          <PhoneIcon className="mt-0.5 h-6 w-6 flex-none text-taco" />
          <div>
            <dt className="font-semibold text-charcoal">Phone</dt>
            <dd>
              <a href={telHref} className="hover:text-taco hover:underline">
                {siteConfig.phone}
              </a>
            </dd>
          </div>
        </div>
        <div className="flex gap-4">
          <MailIcon className="mt-0.5 h-6 w-6 flex-none text-taco" />
          <div>
            <dt className="font-semibold text-charcoal">Email</dt>
            <dd>
              <a href={mailtoHref} className="break-all hover:text-taco hover:underline">
                {siteConfig.email}
              </a>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  )
}
