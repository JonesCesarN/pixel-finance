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
    pointer: { true: { cursor: "pointer" } },
    alert: { true: { color: '$yellow12' } },
    sucess: { true: { color: '$green12' } },
    warning: { true: { color: '$red12' } },
  },

  defaultVariants: {
    size: 1,
  },
});

export default TextBase;
