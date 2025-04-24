  /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sans-serif'],
        circular: ['circular-web', 'sans-serif'],
        general: ['general', 'sans-serif'],
        robert: ['robert-regular', 'sans-serif'],
        robertMedium: ['robert-medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

