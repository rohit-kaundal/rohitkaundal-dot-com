/** @type {import('tailwindcss').Config} */

/*
 * Palette derived from a Rahu-in-Aquarius / Shatabhisha / 9th-house reading.
 *
 *   rahu.*    Shadow planet, no body — eclipse tones. The void the site sits in.
 *   varuna.*  Shatabhisha's deity (cosmic waters, oaths, binding law) and the
 *             nakshatra's traditional aquamarine. Primary accent.
 *   saturn.*  Aquarius' ruler — steel blue-grey. Structure, distance, rigor.
 *             Carries secondary and body-adjacent text.
 *   dharma    9th house = Jupiter's natural home. Gold, reserved for doctrine
 *             moments only. Never decorative.
 *   smoke     Rahu's eclipse violet. Decorative only — 4.1:1 on rahu.abyss,
 *             so it must never carry small body text.
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rahu: {
          void: '#05070C',
          abyss: '#0A0E16',
          deep: '#111726',
          border: '#1B2333',
          hover: '#151C2B',
        },
        varuna: {
          DEFAULT: '#3FC5C9',
          bright: '#6FE0E0',
          deep: '#1B7F86',
        },
        saturn: {
          DEFAULT: '#8494B0',
          dim: '#5E6C86',
        },
        dharma: '#C9A76A',
        smoke: '#7A6E92',
        veil: '#E7EBF2',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'body': ['18px', { lineHeight: '1.8' }],
        'body-lg': ['20px', { lineHeight: '1.75' }],
      },
      letterSpacing: {
        doctrine: '0.28em',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.12)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
