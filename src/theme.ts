import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: {
          text: { value: "#1C1C1C" },
          100: { value: "#cbdcff" },
          200: { value: "#a9c4ff" },
          300: { value: "#86abff" },
          400: { value: "#6392ff" },
          500: { value: "#3f79ff" },
          600: { value: "#2f5fd6" },
          700: { value: "#2345ad" },
          800: { value: "#182b84" },
          900: { value: "#0d115c" },
        },
      },

      fonts: {
        heading: { value: "'Inter', system-ui, sans-serif" },
        body: { value: "'Inter', system-ui, sans-serif" },
      },

      fontSizes: {
        sm: { value: "14px" },
        md: { value: "16px" },
        lg: { value: "18px" },
        xl: { value: "20px" },
        "2xl": { value: "24px" },
        "3xl": { value: "30px" },
      },
    },
  },
});
