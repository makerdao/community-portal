import maker from "@makerdao/dai-ui-theme-maker";
import { icons } from "@makerdao/dai-ui-icons";

export default {
  ...maker, //<- Your default theme.
  icons, //<- Icon package
  colors: {
    ...maker.colors, //<- Deconstruct maker.colors so default colors aren't lost.
    'body': '#53546A'
  },
};
