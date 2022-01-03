import React from 'react';
import { ToggleThemeProps } from './ToggleTheme.props';
import { Button } from './ToggleTheme.styles';

import ThemeLight from '../../../assets/icons/theme-mode-light.svg';
import ThemeDark from '../../../assets/icons/theme-mode-dark.svg';

const ToggleTheme = ({ state, toggleTheme }: ToggleThemeProps): JSX.Element => {
	console.log('-- init --', state, toggleTheme)
	const handleClick = () => {
		if (toggleTheme) {
			console.log('state', state);
			toggleTheme(state === 'light' ? 'dark' : 'light');
		}
	};
	return (
		<Button
			state={state}
			onClick={() => handleClick()}
			title={state !== 'light' ? 'Изменить на тёмную тему' : 'Изменить на светлую тему'}
		>
			{state === 'light' && <ThemeLight className="dark-icon" />}
			{state === 'dark' && <ThemeDark className="light-icon" />}
		</Button>
	);
};

export default ToggleTheme;

