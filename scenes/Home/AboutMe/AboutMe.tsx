import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { AboutMeSection, GraphicContainer } from './AboutMe.styles';
import { GridContent } from '../../../styles';
import { QuickInformation } from '../../../components/QuickInformation/QuickInformation';
import { AboutMeBlock } from './AboutMeBlock/AboutMeBlock';
import GraphicIcon from '../../../assets/graphic.svg';

export const AboutMe = (): JSX.Element => {
	return (
		<Element name="about">
			<AboutMeSection>
				<GridContent>
					<GraphicContainer>
						<GraphicIcon className="graphic-icon" />
					</GraphicContainer>
					<QuickInformation 
						className="quick-information"
						section="welcome"
						subsection="quickInformation"
						count={3} 
					/>
					<AboutMeBlock />
				</GridContent>
			</AboutMeSection>
		</Element>
	);
};