import React from 'react';
import { MenuBlock, ThemeBlock, Email } from './Navigation.styles';

import ToggleMenu from '../ToggleMenu/ToggleMenu';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { ToggleLanguage } from '../../../components';

const Navigation = ({ props }): JSX.Element => {
	const { theme, toggleTheme, openMenu, toggleMenu, language, toggleLanguage } = props;
	return (
		<>
			<MenuBlock>
				<div onClick={toggleMenu}>
					<ToggleMenu  state={openMenu ? 'open' : 'close'} />
				</div>
				{/* <Email href="malito:artyrpridatko@gmail.com">artyrpridatko@gmail.com</Email> */}
			</MenuBlock>
			<ThemeBlock>
				<ToggleLanguage 
					language={language}
					toggleLanguage={toggleLanguage} 
				/>
				<ToggleTheme 
					state={theme === 'light' ? 'dark' : 'light'}
					toggleTheme={toggleTheme} 
				/>
			</ThemeBlock>
		</>
	);
}

export default Navigation;