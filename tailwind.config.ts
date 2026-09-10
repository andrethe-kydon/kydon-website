import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colours resolve through CSS variables set in globals.css, so a
        // `data-brand` wrapper can flip a whole section between the Kydon Group
        // palette (orange primary, blue accent) and KLSI (blue primary, orange
        // accent) without touching any page file.
        //
        // DEFAULT is full-strength brand: large headings, panels, graphics.
        // It is ~3:1 on white, so it must not carry a white button label --
        // CTA fills use `dark` (4.6:1) and hover to `darker`.
        primary: {
          DEFAULT: 'rgb(var(--brand-primary) / <alpha-value>)',
          dark: 'rgb(var(--brand-primary-dark) / <alpha-value>)',
          darker: 'rgb(var(--brand-primary-darker) / <alpha-value>)',
          // KLSI-side only. Under the group palette this resolves to #8C2E00,
          // which reads brown rather than brand orange -- don't reach for it there.
          darkest: 'rgb(var(--brand-primary-darkest) / <alpha-value>)',
          // Background-only: ~2.1-2.4:1 on white, never use as a text colour.
          light: 'rgb(var(--brand-primary-light) / <alpha-value>)',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: 'rgb(var(--brand-accent) / <alpha-value>)',
          dark: 'rgb(var(--brand-accent-dark) / <alpha-value>)',
          darker: 'rgb(var(--brand-accent-darker) / <alpha-value>)',
          // Mirror of primary.darkest: the blue deep stop on group pages,
          // #8C2E00 brown inside a KLSI wrapper. Scope-sensitive, use with care.
          darkest: 'rgb(var(--brand-accent-darkest) / <alpha-value>)',
          // Background-only: ~2.1-2.4:1 on white, never use as a text colour.
          light: 'rgb(var(--brand-accent-light) / <alpha-value>)',
          foreground: '#FFFFFF',
        },
        // Anchored on the guide greys: 300 is Light Grey 420, 400 is Mid Grey
        // 429, 600 is Dark Grey 424. The rest are derived to keep the ramp even.
        neutral: {
          50: '#FAFAFA',
          100: '#F2F3F3',
          200: '#E4E5E5',
          300: '#C7C9C7',
          400: '#A2AAAD',
          500: '#85898B',
          600: '#6D6E71',
          700: '#575859',
          800: '#3D3E3F',
          900: '#262728',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
