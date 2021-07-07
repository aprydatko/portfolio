import React from 'react';
import { Button, Htag } from '../../../components';
import { GridContent } from '../../../styles/Grid';
import { ButtonWrap, Container, Description, DescriptionWrap, Position, Project, ProjectDescriptionWrap, ProjectImage, ProjectInfo, Projects, Year } from './MyProjects.styles';

const projects = [
	{
		name: 'Zorro',
		position: 'UI UX Design',
		description: 'Interaction Design Branding',
		year: '2021'
	},
	{
		name: 'Kana',
		position: 'UI UX Design',
		description: 'Development Branding',
		year: '2021'
	},
	{
		name: 'Gooir',
		position: 'UI UX Design',
		description: 'UI UX Design',
		year: '2018'
	},
	{
		name: 'Mozar',
		position: 'UI UX Design',
		description: 'Development Branding',
		year: '2016'
	}
];

export const MyProjects = (): JSX.Element => {
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">My Projects</Htag>
				<DescriptionWrap>
					<Description>
						<p>A Collection of my favorites project I’ve designed recently. Feeling great while sharing here.</p>
						<p>Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut</p>
					</Description>
				</DescriptionWrap>
				<Projects>
					{projects.map(({ name, position, description }) => (
						<Project>
							<div>
								<ProjectImage></ProjectImage>
								<Year>2021</Year>
							</div>
							<ProjectDescriptionWrap>
								<Htag tag="h4">{name}</Htag>
								<ProjectInfo>
									<Position>{position}</Position>
									<p>{description}</p>
								</ProjectInfo>
							</ProjectDescriptionWrap>
						</Project>
					))}
				</Projects>
				<ButtonWrap>
					<Button className="button-load" appearance="ghost">Load more</Button>
				</ButtonWrap>
			</GridContent>
		</Container>
	);
};