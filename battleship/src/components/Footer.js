import React from 'react';
import { FooterComponent, FooterText } from './styled_components/footerStyles';
import FooterLinks from './FooterLinks';

export default function Footer() {
	return (
		<FooterComponent>
			<FooterLinks />
			<FooterText>
				Copyright ethanlee-lzm
			</FooterText>
		</FooterComponent>
	);
}