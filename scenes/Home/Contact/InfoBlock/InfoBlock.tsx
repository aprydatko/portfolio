import React from 'react';

import Phone from '../../../../assets/icons/phone.svg';
import Email from '../../../../assets/icons/email.svg';
import Map from '../../../../assets/icons/map.svg';

import { Container, List, Item, Text } from './InfoBlock.styles';

export const InfoBlock = (): JSX.Element => {
	return (
		<Container>
			<List>
				<Item>
					<Phone />
					<Text>+800 234 5678</Text>
				</Item>
				<Item>
					<Email />
					<Text>hi@robertlong.com</Text>
				</Item>
				<Item>
					<Map />
					<Text>43rd Street <br /> River Point <br /> NY 1023</Text>
				</Item>
			</List>
		</Container>
	);
}