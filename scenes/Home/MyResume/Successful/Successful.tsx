import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import Music from '../../../../assets/icons/music.svg';
import Travel from '../../../../assets/icons/plane.svg';
import Photo from '../../../../assets/icons/photo.svg';

import { Container, List, Item, Text } from './Successful.styles';

export const Successful = (): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<List>
				<Item>
					<Music />
					<Text>{t('home:resume.skills.music')}</Text>
				</Item>
				<Item>
					<Travel />
					<Text>{t('home:resume.skills.travel')}</Text>
				</Item>
				<Item>
					<Photo />
					<Text>{t('home:resume.skills.photo')}</Text>
				</Item>
			</List>
		</Container>
	);
}