import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Htag } from '../../../components';
import { ContactBlock } from './ContactBlock/ContactBlock';
import { GridContent } from '../../../styles/Grid';
import { Container } from './Contact.styles';

export const Contact = (): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container id="contact">
			<GridContent>
				<Htag tag="h2">{t('home:contact.title')}</Htag>
				<ContactBlock />
			</GridContent>
		</Container>
	);
};