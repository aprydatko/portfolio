import React from 'react';
import { Htag } from '../../../../components';
import { AboutMeBlockSection, Container, MessageBlock, Wrapper } from './AboutMeBlock.styles';

import { Successful } from '../Successful/Successful';
import { Button } from '../../../../components';
import Signature from '../../../../assets/icons/signature.svg';

export const AboutMeBlock = (): JSX.Element => {
	return (
		<AboutMeBlockSection>
			<Htag tag="h2">About Me</Htag>
			<Container>
				<Successful />
				<Wrapper>
					<MessageBlock>
						<p>My name is Robert Long. I have been studying UI UX Design since October 2020. I like creating a cool design project.</p>
						<p>Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed. Quisque quis suscipit ipsum, at pellentesque velit. Duis a congue sem. </p>
						<p>In sed dolor ut ligula malesuada sollicitudin. Morbi iaculis convallis arcu, nec maximus tellus sodales in. Curabitur blandit enim at nisl lobortis, non pretium enim hendrer</p>
					</MessageBlock>
					<Button className="button-resume" appearance="ghost">View Resume</Button>
					<Signature className="signature-icon" />
				</Wrapper>
			</Container>
		</AboutMeBlockSection>
	);
};