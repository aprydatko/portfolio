import React from 'react';
import { MenuBlock, ThemeBlock } from './Navigation.styles';

import ToggleMenu from '../ToggleMenu/ToggleMenu';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navigation = ({ ...props }): JSX.Element => {
	const { theme, toggleTheme } = props;
	return (
		<>
			<MenuBlock>
				<ToggleMenu state="open" />
			</MenuBlock>
			<ThemeBlock>
				<ToggleTheme 
					state={theme === 'light' ? 'dark' : 'light'}
					toggleTheme={toggleTheme} 
				/>
			</ThemeBlock>
		</>
	);
}

export default Navigation;