import React from 'react';

import Backpack from '../../../../assets/icons/backpack.svg';
import Smile from '../../../../assets/icons/smile.svg';
import Cup from '../../../../assets/icons/cup.svg';

import { Container, List, Item, Count, Text } from './Successful.styles';

export const Successful = (): JSX.Element => {
	return (
		<Container>
			<List>
				<Item>
					<Backpack />
					<Count>12</Count>
					<Text>Successful Project</Text>
				</Item>
				<Item>
					<Smile />
					<Count>6</Count>
					<Text>Happy Clients</Text>
				</Item>
			</List>
		</Container>
	);
}