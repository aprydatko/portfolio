import React from 'react';

import Music from '../../../../assets/icons/music.svg';
import Travel from '../../../../assets/icons/plane.svg';
import Photo from '../../../../assets/icons/photo.svg';

import { Container, List, Item, Text } from './Successful.styles';

export const Successful = (): JSX.Element => {
	return (
		<Container>
			<List>
				<Item>
					<Music />
					<Text>Music</Text>
				</Item>
				<Item>
					<Travel />
					<Text>Travel</Text>
				</Item>
				<Item>
					<Photo />
					<Text>Photo</Text>
				</Item>
			</List>
		</Container>
	);
}