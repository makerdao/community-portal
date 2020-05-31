import maker from '@makerdao/dai-ui-theme-maker';
import oasis from '@makerdao/dai-ui-theme-oasis';
import {icons} from '@makerdao/dai-ui-icons';

export default {
	...maker, //<- Your default theme.
	icons, //<- Icon package
	colors: {
		...maker.colors, //<- Deconstruct maker.colors so default colors aren't lost. 
		text: "#000", //<- Manually defining text as Black
		modes: {
			dark: { //<- Custom color mode for dark mode
				text:"#fff"
			},
			oasis: {  //<- Color mode for OASIS that can be used. 
				...oasis.colors
			}
		}
	}
}
    