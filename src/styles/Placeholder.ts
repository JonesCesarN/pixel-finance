import { keyframes } from "@stitches/react";
import { styled } from "stitches.config";

const loading = keyframes({
  '0%': { left: '-75%' },
  '100%': { left: '150%' },
});

const Placeholder = styled("span", {
  height: 10,
  position: 'relative',
  backgroundColor: '$gray9',
  overflow: 'hidden',

  ['&:after']: {
    animation: `${loading} 1.5s infinite`,
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    background: 'linear-gradient(90deg, $gray9, $gray11, $gray9)'
  },

  variants: {
    size: {
      1: { width: '10%' },
      2: { width: '20%' },
      3: { width: '30%' },
      4: { width: '40%' },
      5: { width: '50%' },
      6: { width: '60%' },
      7: { width: '70%' },
      8: { width: '80%' },
      9: { width: '90%' },
      10: { width: '100%' },
    },

    myHeigth: {
      1: { height: 5 },
      2: { height: 10 },
      3: { height: 15 },
      4: { height: 20 },
      5: { height: 25 },
    },

    rounded: { true: { borderRadius: "$2" } }
  },

  defaultVariants: {
    size: 1,
  },


});

export default Placeholder;
