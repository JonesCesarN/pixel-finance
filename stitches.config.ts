import {
  cyan,
  gray,
  grayDark,
  green,
  red,
  yellow
} from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

// Spread the scales in your light and dark themes

const theme = {
  colors: {
    ...gray,
    ...red,
    ...yellow,
    ...green,
    ...cyan,
  },

  space: {
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "30px",
    7: "35px",
    8: "40px",
    9: "45px",
    10: "50px",
  },
  radii: {
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "30px",
    10: "99999px",
  },
  fontSizes: {
    1: "10px",
    2: "12px",
    3: "14px",
    4: "16px",
    5: "24px",
  },
  borderWidths: {
    1: "1px",
    2: "2px",
    3: "3px",
    4: "4px",
    5: "5px",
  },
  sizes: {
    sm: "360px",
  },
};

const utils = {
  mt: (value: Stitches.ScaleValue<"space"> | number) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.ScaleValue<"space"> | number) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.ScaleValue<"space"> | number) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.ScaleValue<"space"> | number) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.ScaleValue<"space"> | number) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.ScaleValue<"space"> | number) => ({
    marginTop: value,
    marginBottom: value,
  }),
  pt: (value: Stitches.ScaleValue<"space"> | number) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.ScaleValue<"space"> | number) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.ScaleValue<"space"> | number) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.ScaleValue<"space"> | number) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.ScaleValue<"space"> | number) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.ScaleValue<"space"> | number) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
};

export const { styled, getCssText, createTheme, globalCss, css } = createStitches({
  theme,
  utils,
});

// define the dark theme using the de-constructed function
export const darkTheme = createTheme({
  colors: {
    ...grayDark,
  },
});

export const GlobalStyles = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap')",
  ],
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    //we can call the color token values with the
    //$ prefix in a string
    // background: "$background",
    // color: "$text",
  },
  "body": {
    fontFamily: "IBM Plex Sans",
  },

  "a": {
    textDecoration: "none",
    color: "CurrentColor",
  },

  "h1,h2,h3,h4,h5,h6,h7": {
    fontSize: 16,
    fontWeight: "lighter",
  },
});
