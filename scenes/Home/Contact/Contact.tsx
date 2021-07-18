import React from 'react';
import { Htag } from '../../../components';
import { ContactBlock } from './ContactBlock/ContactBlock';
import { GridContent } from '../../../styles/Grid';
import { Container } from './Contact.styles';

export const Contact = (): JSX.Element => {
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">Contact Me</Htag>
				<ContactBlock />
			</GridContent>
		</Container>
	);
};