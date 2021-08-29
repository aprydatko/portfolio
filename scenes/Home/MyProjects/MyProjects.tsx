import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button, Htag } from '../../../components';
import { ProjectComponentProps } from './MyProjects.props';
import { HeadlineDescription } from '../../../components/HeadlineDescription/HeadlineDescription';
import { GridContent } from '../../../styles/Grid';
import { ButtonWrap, Container, Position, Project, ProjectDescriptionWrap, ProjectImage, ProjectInfo, Projects, Year } from './MyProjects.styles';

const ProjectComponent = ({ index, t }: ProjectComponentProps):JSX.Element => {
	return (
		<Project key={index}>
			<div>
				<ProjectImage></ProjectImage>
				<Year>{t(`home:projects.items.${index}.year`)}</Year>
			</div>
			<ProjectDescriptionWrap>
				<Htag tag="h4">{t(`home:projects.items.${index}.title`)}</Htag>
				<ProjectInfo>
					<Position>{t(`home:projects.items.${index}.position`)}</Position>
					<p>{t(`home:projects.items.${index}.description`)}</p>
				</ProjectInfo>
			</ProjectDescriptionWrap>
		</Project>
	);
};

export const MyProjects = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">{t('home:projects.title')}</Htag>
				<HeadlineDescription className="my-projects" pageName="home" sectionName="projects" />
				<Projects>
					{[0, 1].map(number => 
						<ProjectComponent index={number} t={t} />)}
				</Projects>
				<ButtonWrap>
					<Button className="button-load" appearance="ghost" size="middle">{t('home:projects.button')}</Button>
				</ButtonWrap>
			</GridContent>
		</Container>
	);
};