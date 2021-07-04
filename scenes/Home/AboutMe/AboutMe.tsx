import React from 'react';
import { Htag } from '../../../components/Htag/Htag';
import { Social } from '../../../components';

import { AboutMeSection } from './AboutMe.styles';
import { GridContent } from '../../../styles';
import { QuickInformation } from './QuickInformation/QuickInformation';
import { AboutMeBlock } from './AboutMeBlock/AboutMeBlock';

const data = [
	{
		id: 0,
		headline: 'Born in',
		text: 'New York'
	},
	{
		id: 1,
		headline: 'Expirience',
		text: '7+ Years'
	},
	{
		id: 2,
		headline: 'Date of Birth',
		text: '27 June 1992'
	}
];

export const AboutMe = (): JSX.Element => {
	return (
		<AboutMeSection>
			<GridContent>
				<QuickInformation data={data} />
				<AboutMeBlock />
			</GridContent>
		</AboutMeSection>
	);
};