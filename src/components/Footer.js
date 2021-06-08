import { FooterComponent, FooterText } from '../style';
import FooterLinks from './FooterLinks';
import React from 'react';

export default function Footer() {
	return (
		<FooterComponent>
			<FooterLinks />
			<FooterText>
				Copyright © 2021 ethanlee-lzm
			</FooterText>
		</FooterComponent>
	);
}
