/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'grow-width': 'growWidth 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-rose-500',
    'bg-rose-600',
    'bg-rose-700',
    'bg-blue-500',
    'bg-blue-600',
    'bg-blue-700',
    'bg-green-500',
    'bg-green-600',
    'bg-green-700',
  ],
};