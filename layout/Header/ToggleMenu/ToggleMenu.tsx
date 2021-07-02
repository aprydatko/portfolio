import React from 'react';

import { ToggleMenuProps } from './ToggleMenu.props';
import { Button } from './ToggleMenu.styles';

import MenuClose from '../../../assets/icons/menu-close.svg';
import MenuOpen from '../../../assets/icons/menu-open.svg';


const ToggleMenu = ({ state }: ToggleMenuProps): JSX.Element => {
	return (
		<Button state={state}>
			{state === 'open' && <MenuOpen />}
			{state === 'close' && <MenuClose />}
		</Button>
	);
};

export default ToggleMenu;

