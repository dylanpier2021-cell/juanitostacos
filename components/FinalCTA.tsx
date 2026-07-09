import { CTAButtons } from '@/components/CTAButtons'

/**
 * Bold closing call-to-action band. Drop it near the bottom of most pages so
 * every page ends with a clear next step (call, directions, menu).
 */
export function FinalCTA({
  title = 'Hungry yet? Come get some tacos.',
  text = 'We are open every day and everything is made fresh to order. Call ahead or just walk up. We will take good care of you.',
  showMenu = true,
}: {
  title?: string
  text?: string
  showMenu?: boolean
}) {
  return (
    <section className="section bg-taco text-white">
      <div className="container-x text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{text}</p>
        <div className="mt-8 flex justify-center">
          <CTAButtons variant="onDark" showMenu={showMenu} className="justify-center" />
        </div>
      </div>
    </section>
  )
}
