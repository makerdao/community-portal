import maker from "@makerdao/dai-ui-theme-maker";

export default {
  color: "codeText",
  backgroundColor: "codeBG",
  ".selector, .attr-name, .string, .char, .builtin, .inserted": {
    color: "primary",
  },
  // comments and characters like <, =>, (), etc
  ".prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
    color: "background",
  },
  ".comment": {
    fontStyle: "italic",
    color: "textMuted",
  },
  // class names, functions and numbers
  ".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .maybe-class-name, .regex, .important, .variable": {
    color: "onNotice",
  },

  // keywords like const, return
  ".atrule, .attr-value, .keyword": {
    color: "success",
  },

  fontSize: 3,
  fontFamily: "Roboto Mono",
  overflow: "auto",
  p: 3,
  pt: 4,
  mt: 0,
  borderRadius: "4px",
  //   ".prolog,.constant,.builtin": {
  //     "color": "rgb(189, 147, 249)"
  //   },
  //   ".inserted,.function": {
  //     "color": "rgb(80, 250, 123)"
  //   },
  //   ".deleted": {
  //     "color": "rgb(255, 85, 85)"
  //   },
  //   ".changed": {
  //     "color": "rgb(255, 184, 108)"
  //   },
  //   ".punctuation,.symbol": {
  //     "color": "rgb(248, 248, 242)"
  //   },
  //   ".string,.char,.tag,.selector": {
  //     "color": "rgb(255, 121, 198)"
  //   },
  //   ".keyword,.variable": {
  //     "color": "rgb(189, 147, 249)",
  //     "fontStyle": "italic"
  //   },
  //   ".comment": {
  //     "color": "rgb(98, 114, 164)"
  //   },
  //   ".attr-name": {
  //     "color": "rgb(241, 250, 140)"
  //   },
  //   ".highlight": {
  //     "background": "hsla(0, 0%, 30%, .5)"
  //   }
};
