import React from "react";

import useTranslation from "@modules/utility/useTranslation";

const Footer = () => {
	const {locale, t} = useTranslation();

	return (
		<footer>
			Site Footer
		</footer>
	);
}

export default Footer;
