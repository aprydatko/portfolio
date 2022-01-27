import React from 'react';
import * as Scroll from 'react-scroll';

import { MyResumeSection } from './MyResume.styles';
import { GridContent } from '../../../styles';
import { MyResumeBlock } from './MyResumeBlock/MyResume';

export const MyResume = (): JSX.Element => {
	let Element  = Scroll.Element;
	return (
		<Element name="resume" className="resume">
			<MyResumeSection>
				<GridContent>
					<MyResumeBlock />
				</GridContent>
			</MyResumeSection>
		</Element>
	);
};