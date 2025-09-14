module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1", // indigo-500
          50: "#EEF2FF", // indigo-50
          100: "#E0E7FF", // indigo-100
          200: "#C7D2FE", // indigo-200
          300: "#A5B4FC", // indigo-300
          400: "#818CF8", // indigo-400
          500: "#6366F1", // indigo-500
          600: "#4F46E5", // indigo-600
          700: "#4338CA", // indigo-700
          800: "#3730A3", // indigo-800
          900: "#312E81", // indigo-900
        },
        secondary: {
          DEFAULT: "#EC4899", // pink-500
          50: "#FDF2F8", // pink-50
          100: "#FCE7F3", // pink-100
          200: "#FBCFE8", // pink-200
          300: "#F9A8D4", // pink-300
          400: "#F472B6", // pink-400
          500: "#EC4899", // pink-500
          600: "#DB2777", // pink-600
          700: "#BE185D", // pink-700
          800: "#9D174D", // pink-800
          900: "#831843", // pink-900
        },
        accent: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          200: "#A7F3D0", // emerald-200
          300: "#6EE7B7", // emerald-300
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
        },
        background: "#0F0F23", // slate-900
        surface: {
          DEFAULT: "#1E1E2E", // slate-800
          light: "#334155", // slate-700
        },
        text: {
          primary: "#F8FAFC", // slate-50
          secondary: "#94A3B8", // slate-400
          muted: "#64748B", // slate-500
        },
        success: {
          DEFAULT: "#22C55E", // green-500
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500
          600: "#16A34A", // green-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #4F46E5 0%, #DB2777 100%)',
      },
      boxShadow: {
        'floating': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
      borderColor: {
        'subtle': 'rgba(255, 255, 255, 0.1)',
        'surface': 'rgba(255, 255, 255, 0.05)',
      },
      transitionDuration: {
        'smooth': '300ms',
        'quick': '200ms',
        'page': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}