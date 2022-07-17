import { styled } from "stitches.config";

const TextBase = styled("p", {
  variants: {
    size: {
      1: { fontSize: "$1" },
      2: { fontSize: "$2" },
      3: { fontSize: "$3" },
      4: { fontSize: "$4" },
      5: { fontSize: "$5" },
    },

    uppercase: { true: { textTransform: "uppercase" } },
    bold: { true: { fontWeight: "bold" } },
    boldDark: { true: { fontWeight: "bold", color: '#121212' } },
    pointer: { true: { cursor: "pointer" } },
  },

  defaultVariants: {
    size: 1,
  },
});

export default TextBase;
