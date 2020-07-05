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
  pt: 0,
  mt: 0,
  borderRadius: "4px",
};
