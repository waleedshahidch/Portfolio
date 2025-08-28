export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af", // deep blue
        secondary: "#3b82f6", // lighter blue
        dark: "#0a0a0a",     // near black background
      },
    },
  },
  plugins: [],
}
