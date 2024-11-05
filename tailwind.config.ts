import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',         // A soft blue for primary buttons and links
        'primary-dark': '#155CB0',   // Darker shade for hover states or headers
        secondary: '#F28C38',       // Accent orange for highlights or call-to-action
        'secondary-dark': '#C76D22', // Darker shade of secondary for contrast
        background: '#F7F9FC',      // Light gray background for sections
        surface: '#FFFFFF',         // Clean white for cards and containers
        text: '#333333',            // Dark gray for primary text
        'text-muted': '#555555',    // Medium gray for secondary or placeholder text
      },
    },
  },

  plugins: [],
};
export default config;
