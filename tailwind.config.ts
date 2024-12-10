import { type Config } from "tailwindcss";
import { burstColors, burstTextColors } from "./static/colors.ts";
import typography from "@tailwindcss/typography";
import twHLJS from "./node_modules/.deno/tailwind-highlightjs@2.0.1/node_modules/tailwind-highlightjs/src/index.js";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  safelist: [{
    pattern: /hljs+/,
  }],
  mode: "jit",
  theme: {
    extend: {
      colors: burstColors,
      textColor: burstTextColors,
    },
    hljs: {
      theme: 'night-owl',
    },
    typography: {
      DEFAULT: {
        css: {
          h1: {
            color: "#F46036", // Custom color for h1
            fontSize: "2.25rem", // Custom size
            fontWeight: "700",
          },
          h2: {
            color: burstColors.accLiteGreen,
            fontSize: "1.875rem",
            fontWeight: "600",
            fontStyle: "italic;",
            textDecoration: "underline"
          },
          h3: {
            color: burstColors.accLiteGreen,
            fontSize: "1.5rem",
            fontWeight: "600",
            paddingLeft: "1rem", // Add padding for 2-space indent
          },
          h4: {
            color: burstColors.accLiteGreen,
            fontSize: "1.25rem",
            fontWeight: "600",
            paddingLeft: "1rem", // Add padding for 2-space indent
            strong: {
              color: burstColors.accRed
            }
          },
          p: {
            color: burstColors.creamTan,
            lineHeight: "1.6",
            fontSize: "1rem",
          },
          a: {
            color: burstColors.accGreen,
            textDecoration: "underline",
            "&:visited": {
              color: burstColors.accGreen2,
              "&:hover": {
                color: burstColors.accRed
              }
            },
            "&:hover": {
              color: burstColors.accRed, // Change on hover
            },
            "& img": {
              borderBottom: `1px solid ${burstColors.accGreen}`, // Add underline for images in links
              textDecoration: "none",
              display: "inline-block",
              verticalAlign: "middle",
            },
            "&:visited img": {
              borderColor: burstColors.accGreen2, // Change underline color to red on hover
            },
            "&:hover img": {
              borderColor: burstColors.accRed, // Change underline color to red on hover
            },
          },
          img: {
            display: "block",
            margin: "1.5rem auto", // Top/bottom margin, center horizontally
            padding: "0", // Reset padding if needed
            maxWidth: "100%", // Make images responsive
            height: "auto",
          },
          "img.marked-emoji-img": {
            display: "inline-block",
            width: "1em",
            height: "1em",
            verticalAlign: "-0.15em",
            position: "relative",
            margin: "0",
            padding: "0",
          },
          pre: {
            backgroundColor: burstColors.termBack1,
            padding: "1rem",
            borderRadius: "0.5rem",
            color: burstTextColors.white,
            overflowX: "auto",
          },
          "figure.custom-image": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "1.5rem auto", // Margin around the figure
            img: {
              borderRadius: "0.5rem",
              maxWidth: "100%",
              height: "auto",
            },
            code: {
              color: burstTextColors.transWhite,
              backgroundColor: burstColors.trans2Gray,
              padding: "0.1em 0.4em",
              borderRadius: "0.25rem",
              fontFamily: "monospace",
              fontSize: "0.90em",
            },
            figcaption: {
              marginTop: "-1rem", // Small space between image and caption
              color: burstTextColors.subtitles,
              padding: "0.2rem 0", // Slight padding for clarity
              fontSize: "0.875rem",
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "400",
            },
            "& + *": {
              marginTop: "1.5rem", // Normal gap after the figure to the next content
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [typography, twHLJS],
} satisfies Config;
