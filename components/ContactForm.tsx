'use client'

import { useState } from 'react'
import { siteConfig } from '@/siteConfig'

type Status = 'idle' | 'submitting' | 'success' | 'error'

/**
 * Accessible contact form.
 *
 * - If siteConfig.contactFormEndpoint is set (for example a Formspree URL), the
 *   form POSTs there and shows a success message, with no backend to run.
 * - If it is empty, the form falls back to opening the visitor's email app with
 *   the message pre-filled (mailto:), which works on a fully static site.
 *
 * A honeypot field ("company") catches simple spam bots.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const endpoint = siteConfig.contactFormEndpoint

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot: if filled, silently pretend success.
    if ((data.get('company') as string)?.length) {
      setStatus('success')
      form.reset()
      return
    }

    const name = (data.get('name') as string) || ''
    const email = (data.get('email') as string) || ''
    const phone = (data.get('phone') as string) || ''
    const message = (data.get('message') as string) || ''

    if (!endpoint) {
      // Static fallback: open the email client.
      const subject = encodeURIComponent(`Website message from ${name}`)
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
      )
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
      setStatus('success')
      form.reset()
      return
    }

    try {
      setStatus('submitting')
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-charcoal focus:border-taco"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-charcoal focus:border-taco"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal">
            Phone <span className="font-normal text-charcoal/50">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1 w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-charcoal focus:border-taco"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-charcoal focus:border-taco"
        />
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send message'}
        </button>
        {status === 'success' && (
          <p role="status" className="text-sm font-semibold text-lime">
            Thanks! Your message is on its way.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="text-sm font-semibold text-taco">
            Something went wrong. Please call us at {siteConfig.phone}.
          </p>
        )}
      </div>
      <p className="text-xs text-charcoal/50">
        Prefer to talk? Call {siteConfig.phone} or email {siteConfig.email}.
      </p>
    </form>
  )
}
