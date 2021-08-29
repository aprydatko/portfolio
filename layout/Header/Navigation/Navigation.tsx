import React from 'react';
import { useRouter } from 'next/router'
import { MenuBlock, ThemeBlock, Email } from './Navigation.styles';

import ToggleMenu from '../ToggleMenu/ToggleMenu';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { ToggleLanguage } from '../../../components';

const Navigation = ({ props }): JSX.Element => {
	const { theme, toggleTheme, openMenu, toggleMenu, language, toggleLanguage } = props;
	const router = useRouter();
	const isHomePage = router.route === '/';
	return (
		<>
			<MenuBlock>
				<div onClick={toggleMenu}>
					<ToggleMenu  state={openMenu ? 'open' : 'close'} />
				</div>
				{!isHomePage && <Email href="malito:artyrpridatko@gmail.com">artyrpridatko@gmail.com</Email>}
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