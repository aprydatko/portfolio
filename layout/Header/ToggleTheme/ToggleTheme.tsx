import React from 'react';
import { ToggleThemeProps } from './ToggleTheme.props';
import { Button } from './ToggleTheme.styles';

import ThemeLight from '../../../assets/icons/theme-mode-light.svg';
import ThemeDark from '../../../assets/icons/theme-mode-dark.svg';

const ToggleTheme = ({ state, toggleTheme }: ToggleThemeProps): JSX.Element => {
	const handleClick = () => {
		toggleTheme(state === 'light' ? 'dark' : 'light');
	};
	return (
		<Button
			state={state}
			onClick={handleClick}
		>
			{state === 'light' && <ThemeLight />}
			{state === 'dark' && <ThemeDark />}
		</Button>
	);
};

export default ToggleTheme;

