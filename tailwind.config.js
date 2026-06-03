/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#006BFF',
          dark:    '#004796',
          light:   '#E8F2FF',
          lighter: '#F0F7FF',
        },
        accent: '#0AE8F0',
        ink: {
          DEFAULT:   '#1A1D23',
          secondary: '#5C6070',
          muted:     '#8B90A0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          2:       '#F8F9FA',
          dark:    '#1A1D23',
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark:    '#CBD5E1',
        },
      },

      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        xs:    ['0.75rem',  { lineHeight: '1.125rem' }],
        sm:    ['0.875rem', { lineHeight: '1.25rem' }],
        base:  ['1rem',     { lineHeight: '1.5rem' }],
        lg:    ['1.125rem', { lineHeight: '1.75rem' }],
        xl:    ['1.25rem',  { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.375rem' }],
        '4xl': ['2.25rem',  { lineHeight: '2.75rem' }],
        '5xl': ['3rem',     { lineHeight: '1.1' }],
        '6xl': ['3.75rem',  { lineHeight: '1.05' }],
        '7xl': ['4.5rem',   { lineHeight: '1' }],
      },

      fontWeight: {
        normal:    '400',
        medium:    '500',
        semibold:  '600',
        bold:      '700',
        extrabold: '800',
      },

      spacing: {
        4.5:  '1.125rem',
        13:   '3.25rem',
        15:   '3.75rem',
        18:   '4.5rem',
        22:   '5.5rem',
        26:   '6.5rem',
        30:   '7.5rem',
        section: '6rem',   // 96px
      },

      maxWidth: {
        container: '1200px',
        prose:     '680px',
      },

      borderRadius: {
        none: '0',
        sm:   '4px',
        DEFAULT: '8px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
        '2xl':'24px',
        full: '9999px',
      },

      boxShadow: {
        xs:   '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm:   '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        md:   '0 4px 16px -2px rgb(0 0 0 / 0.10), 0 2px 6px -2px rgb(0 0 0 / 0.06)',
        lg:   '0 10px 30px -4px rgb(0 0 0 / 0.12), 0 4px 12px -4px rgb(0 0 0 / 0.07)',
        xl:   '0 20px 48px -8px rgb(0 0 0 / 0.16), 0 8px 20px -6px rgb(0 0 0 / 0.08)',
        brand: '0 4px 16px -2px rgb(0 107 255 / 0.35)',
        'brand-lg': '0 8px 32px -4px rgb(0 107 255 / 0.40)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
        none:  'none',
      },

      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%':   { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'accordion-open': {
          '0%':   { height: '0', opacity: '0' },
          '100%': { height: 'var(--accordion-height)', opacity: '1' },
        },
        'accordion-close': {
          '0%':   { height: 'var(--accordion-height)', opacity: '1' },
          '100%': { height: '0', opacity: '0' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-brand': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(0 107 255 / 0.4)' },
          '50%':      { boxShadow: '0 0 0 8px rgb(0 107 255 / 0)' },
        },
      },

      animation: {
        'fade-in':    'fade-in 0.4s ease forwards',
        'slide-up':   'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in':   'scale-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow':  'spin-slow 3s linear infinite',
        'pulse-brand':'pulse-brand 2s ease-in-out infinite',
      },

      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },

      transitionDuration: {
        250: '250ms',
        350: '350ms',
        400: '400ms',
        600: '600ms',
      },

      zIndex: {
        dropdown: '200',
        sticky:   '300',
        modal:    '400',
        overlay:  '500',
        tooltip:  '600',
      },
    },
  },
  plugins: [],
};
