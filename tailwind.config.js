/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          border: 'var(--color-border)', // gray-200
          input: 'var(--color-input)', // white
          ring: 'var(--color-ring)', // green-600
          background: 'var(--color-background)', // white
          foreground: 'var(--color-foreground)', // gray-800
          primary: {
            DEFAULT: 'var(--color-primary)', // green-600
            foreground: 'var(--color-primary-foreground)', // white
          },
          secondary: {
            DEFAULT: 'var(--color-secondary)', // gray-50
            foreground: 'var(--color-secondary-foreground)', // gray-800
          },
          destructive: {
            DEFAULT: 'var(--color-destructive)', // red-600
            foreground: 'var(--color-destructive-foreground)', // white
          },
          muted: {
            DEFAULT: 'var(--color-muted)', // gray-50
            foreground: 'var(--color-muted-foreground)', // gray-500
          },
          accent: {
            DEFAULT: 'var(--color-accent)', // yellow-400
            foreground: 'var(--color-accent-foreground)', // gray-800
          },
          popover: {
            DEFAULT: 'var(--color-popover)', // white
            foreground: 'var(--color-popover-foreground)', // gray-800
          },
          card: {
            DEFAULT: 'var(--color-card)', // white
            foreground: 'var(--color-card-foreground)', // gray-800
          },
          success: {
            DEFAULT: 'var(--color-success)', // green-600
            foreground: 'var(--color-success-foreground)', // white
          },
          warning: {
            DEFAULT: 'var(--color-warning)', // yellow-500
            foreground: 'var(--color-warning-foreground)', // gray-800
          },
          error: {
            DEFAULT: 'var(--color-error)', // red-600
            foreground: 'var(--color-error-foreground)', // white
          },
          crimson: {
            DEFAULT: 'var(--color-crimson)', // red-700
            foreground: 'var(--color-crimson-foreground)', // white
          },
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'open-sans': ['Open Sans', 'sans-serif'],
          'playfair': ['Playfair Display', 'serif'],
        },
        fontWeight: {
          'semibold': '600',
          'bold': '700',
          'medium': '500',
        },
        boxShadow: {
          'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          'card': '0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        transitionDuration: {
          '250': '250ms',
          '300': '300ms',
        },
        transitionTimingFunction: {
          'ease-in-out': 'ease-in-out',
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
        },
        zIndex: {
          '100': '100',
          '150': '150',
          '200': '200',
          '300': '300',
        },
        animation: {
          'fade-in': 'fadeIn 300ms ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': {
              opacity: '0',
              transform: 'translateY(10px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
      },
    },
    plugins: [],
  }