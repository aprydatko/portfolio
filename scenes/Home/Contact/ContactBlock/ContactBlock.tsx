import React from 'react';
import { FormBlock } from '../Form/Form';
import { AboutMeBlockSection, Container, MessageBlock, Wrapper } from './ContactBlock.styles';

import { InfoBlock } from '../InfoBlock/InfoBlock';

export const ContactBlock = (): JSX.Element => {
	return (
		<AboutMeBlockSection>
			<Container>
				<InfoBlock />
				<Wrapper>
					<MessageBlock>
						<p>Have a Question? or Just want to say Hi? Drop me a message!</p>
					</MessageBlock>
					<FormBlock />
				</Wrapper>
			</Container>
		</AboutMeBlockSection>
	);
};