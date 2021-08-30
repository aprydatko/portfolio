import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { GridContent } from '../../styles/Grid';
import { Container } from './project.styles';
import { Htag, HeadlineDescription } from '../../components';

export const ProjectTemplate = ({ children, ...props }): JSX.Element => {
	const { t, lang } = useTranslation();
	console.log(props);
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">{t('project_zorro:title')}</Htag>
				
			</GridContent>
		</Container>
	);
};