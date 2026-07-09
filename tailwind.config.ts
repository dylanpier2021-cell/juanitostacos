import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette. Change these values to re-skin the whole site.
        taco: '#C8102E', // taco-red, primary
        masa: '#F2A900', // warm gold / masa yellow
        charcoal: '#1A1A1A', // near-black text
        cream: '#FFF8F0', // warm off-white background
        lime: '#5A8F29', // fresh lime-green accent
        'taco-dark': '#A00D24', // darker red for hover states
        'masa-dark': '#D8960A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 6px 24px -8px rgba(26, 26, 26, 0.18)',
      },
      typography: () => ({
        taco: {
          css: {
            '--tw-prose-body': '#2b2b2b',
            '--tw-prose-headings': '#1A1A1A',
            '--tw-prose-links': '#C8102E',
            '--tw-prose-bold': '#1A1A1A',
            '--tw-prose-quotes': '#1A1A1A',
            '--tw-prose-bullets': '#F2A900',
            '--tw-prose-counters': '#C8102E',
            maxWidth: '68ch',
          },
        },
      }),
    },
  },
  plugins: [typography],
}

export default config
