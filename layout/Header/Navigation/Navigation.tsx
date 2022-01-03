import React from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { MenuBlock, ThemeBlock, Email, Line } from './Navigation.styles';

import ToggleMenu from '../ToggleMenu/ToggleMenu';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { ToggleLanguage } from '../../../components';
import { NavigationProps } from './Navigation.props';

const Navigation = (props: NavigationProps): JSX.Element => {
	const { t } = useTranslation();
	const { theme, toggleTheme, openMenu, toggleMenu } = props;
	const router = useRouter();
	const isHomePage = router.route === '/';
	return (
		<>
			<MenuBlock>
				<div onClick={toggleMenu}>
					<ToggleMenu  state={openMenu ? 'open' : 'close'} />
				</div>
				{(!isHomePage || openMenu) && <Email href={'mailto:' + t(`common:contacts.email`)}>{t(`common:contacts.email`)}</Email>}
			</MenuBlock>
			<ThemeBlock>
				<ToggleLanguage />
				<Line className={theme === 'dark' ? 'dark-line' : 'light-line'} />
				<ToggleTheme 
					state={theme === 'light' ? 'dark' : 'light'}
					toggleTheme={toggleTheme} 
				/>
			</ThemeBlock>
		</>
	);
};

export default Navigation;