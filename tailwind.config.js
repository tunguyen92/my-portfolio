/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "calc(1.5rem * .5)",
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "black-1": "var(--black-1)",
        "black-2": "var(--black-2)",
        "orange-1": "var(--orange-1)",
        "yellow-1": "var(--yellow-1)",
        "gray-1": "var(--gray-1)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #ff7d61 0%, #ffdb59 100%)",
      },
      borderRadius: {
        "4xl": "30px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        mover: {
          "0%": {
            transform: " translateY(0)",
          },
          "100% ": {
            transform: "translateY(-8px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-slow": " mover 1s infinite alternate",
      },
      writingMode: {
        "vertical-rl": "vertical-rl",
        "horizontal-tb": "horizontal-tb",
      },
      screens: {
        xs: "375px",
        sl: "576px",
        "2xl": "1440px",
      },
      transitionDuration: {
        1600: "1600ms",
        9000: "9000ms",
      },
      boxShadow: {
        custom: "[0px_40px_40px_-25px_rgba(19,31,47,0.60)]",
      },
      content: {
        empty: '""',
      },
      zIndex: {
        2: "2",
        100: "100",
      },
      fontSize: {
        "5xl": ["48px", "normal"],
        "6xl": ["60px", "normal"],
        "7xl": ["72px", "normal"],
        "8xl": ["96px", "normal"],
      },
      spacing: {
        5.5: "22px",
        6.5: "26px",
        7.5: "30px",
        12.5: "50px",
        15: "60px",
        16: "64px",
        17.5: "70px",
        21: "84px",
        22: "88px",
        22.5: "90px",
        25: "100px",
        27: "108px",
        27.5: "110px",
        35: "140px",
        38.5: "150px",
        42: "168px",
        42.5: "170px",
        46: "184px",
        50: "200px",
        51: "204px",
        82.5: "330px",
        95: "380px",
        400: "1600",
      },
      lineHeight: {
        6.5: "26px",
        7.5: "30px",
        12: "48px",
        16: "64px",
      },
    },
    variants: {
      writingMode: ["responsive"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".writing-vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".writing-horizontal-tb": {
          writingMode: "horizontal-tb",
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
    // eslint-disable-next-line no-undef
    require("tailwindcss-animate"),
  ],
};
