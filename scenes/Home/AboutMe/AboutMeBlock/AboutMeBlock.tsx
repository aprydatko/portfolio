import React from 'react';
import { Htag } from '../../../../components';
import { AboutMeBlockSection, Container, MessageBlock, Wrapper } from './AboutMeBlock.styles';

import { Successful } from '../Successful/Successful';
import { Button } from '../../../../components';
// import Signature from '../../../../assets/icons/signature.svg';

export const AboutMeBlock = (): JSX.Element => {
	return (
		<AboutMeBlockSection>
			<Htag tag="h2">About Me</Htag>
			<Container>
				<Successful />
				<Wrapper>
					<MessageBlock>
						<p>My name is Artur Prydatko. I have been studying Front-end since September  2019. I like creating a cool project.</p>
						<p>The main direction is the development of online stores from scratch, delivery applications, CRM panels for accounting and editing of product items. </p>
						<p>Most of the work I make front-end, but I also make a little back-end for processing requests, working with services.</p>
					</MessageBlock>
					<Button className="button-resume" appearance="ghost" size="middle">View Resume</Button>
					{/* <Signature className="signature-icon" /> */}
				</Wrapper>
			</Container>
		</AboutMeBlockSection>
	);
};