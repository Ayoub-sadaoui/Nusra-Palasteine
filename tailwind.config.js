/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "500px", // Your custom breakpoint for screens smaller than sm
      sm: "640px", // Default sm breakpoint
      md: "780px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Aljazeera: ["Aljazeera", "sans-serif"],
      },
      colors: {
        // Add your custom colors here
        primary: "#F79122",
        secondary: "#ffc107",
        "primary-content": "#8F8F8F",
        // ... add more colors
      },
    },
  },

  plugins: [require("daisyui")],
};
