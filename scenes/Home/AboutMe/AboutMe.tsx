import React from 'react';

import { AboutMeSection, GraphicContainer } from './AboutMe.styles';
import { GridContent } from '../../../styles';
import { QuickInformation } from '../../../components/QuickInformation/QuickInformation';
import { AboutMeBlock } from './AboutMeBlock/AboutMeBlock';
import GraphicIcon from '../../../assets/graphic.svg';

const data = [
	{
		id: 0,
		headline: 'Born in',
		text: 'Sumy'
	},
	{
		id: 1,
		headline: 'Expirience',
		text: '2+ Years'
	},
	{
		id: 2,
		headline: 'Date of Birth',
		text: '15 November 1990'
	}
];

export const AboutMe = (): JSX.Element => {
	return (
		<AboutMeSection>
			<GridContent>
				<GraphicContainer>
					<GraphicIcon className="graphic-icon" />
				</GraphicContainer>
				<QuickInformation className="quick-information" data={data} />
				<AboutMeBlock />
			</GridContent>
		</AboutMeSection>
	);
};