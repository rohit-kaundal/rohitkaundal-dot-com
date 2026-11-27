/** @type {import('tailwindcss').Config} */

/*
 * Palette derived from a Rahu-in-Aquarius / Shatabhisha / 9th-house reading.
 *
 *   rahu.*    Shadow planet, no body — eclipse tones. The void the site sits in.
 *   varuna.*  Shatabhisha's deity (cosmic waters, oaths, binding law) and the
 *             nakshatra's traditional aquamarine. Primary accent, and the colour
 *             of an "allowed" signal in the lab instruments.
 *   saturn.*  Aquarius' ruler — steel blue-grey. Structure, distance, rigor.
 *             Carries secondary and body-adjacent text.
 *   dharma    9th house = Jupiter's natural home. Gold, reserved for doctrine
 *             moments only. Never decorative.
 *   signal    Instrument amber: live status, "escalated", work in progress.
 *   alarm     Instrument red: "blocked", non-compliant. Status labels only.
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
        signal: '#E8A33D',
        alarm: '#E5484D',
        veil: '#E7EBF2',
      },
      fontFamily: {
        sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        doctrine: '0.24em',
      },
    },
  },
  plugins: [],
}
