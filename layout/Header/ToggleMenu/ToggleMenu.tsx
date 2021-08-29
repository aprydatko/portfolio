import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { ToggleMenuProps } from './ToggleMenu.props';
import { Button } from './ToggleMenu.styles';

import MenuClose from '../../../assets/icons/menu-close.svg';
import MenuOpen from '../../../assets/icons/menu-open.svg';

const ToggleMenu = ({ state }: ToggleMenuProps): JSX.Element => {
	const { t } = useTranslation();
	return (
		<>
			<Button state={state}>
				{state === 'open' && <MenuClose />}
				{state === 'close' && <MenuOpen />}
			</Button>
		</>
	);
};

export default ToggleMenu;

