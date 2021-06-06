import React from 'react';
import { HeaderComponent, Logo } from './styled_components/headerStyles';
import logo from '../assets/images/starcraftLogo.png';

export default function Header() {
	return (
		<HeaderComponent>
			<Logo src={logo} />
		</HeaderComponent>
	);
}