import React from 'react';
import { Htag } from '../../../../components';
import { AboutMeBlockSection, Container, MessageBlock, Wrapper } from './MyResume.styles';

import { Successful } from '../Successful/Successful';
import { Button, Skills } from '../../../../components';
import { WorkHistory } from '../WorkHistory/WorkHistory';

const skills = [
	{
		id: 0,
		name: 'HTML',
		percent: 9
	},
	{
		id: 1,
		name: 'CSS',
		percent: 8
	},
	{
		id: 2,
		name: 'JavaScript',
		percent: 7
	},
	{
		id: 3,
		name: 'React/Redux',
		percent: 7
	},
	{
		id: 4,
		name: 'Typescript',
		percent: 5
	},
	{
		id: 5,
		name: 'Node/PHP',
		percent: 4
	},
];

const history = {
	education: [
		{
			date: '2008 - 2013',
			position: 'Master in Engineer',
			place: 'Sumy State University'
		},
	],
	expertise: [
		'App Development',
		'Website Development',
		'CRM/ADMIN pannels',
		'SEO',
	],
	awards: [
		{
			date: '2021',
			place: 'Home',
			description: 'I create interesting pet projects'
		},
	],
	expirience: [
		{
			date: '2020 - now',
			name: 'Ithinkers',
			position: 'Front/Web Developer',
			description: 'I am developing an e-app admin panel for catering establishments. I create and improve online stores for popular chains of pizzerias, rolls, and more. I make applications for the delivery of goods.'
		},
		{
			date: '2019 - 2020',
			name: 'ZenBit Tech',
			position: 'Front-end Developer',
			description: 'I was engaged in adding new functionality for the application for the delivery of orders, implementing new features.'
		}
	]
};

export const MyResumeBlock = (): JSX.Element => {
	return (
		<AboutMeBlockSection>
			<Htag tag="h2">My Resume</Htag>
			<Container>
				<Successful />
				<Wrapper>
					<MessageBlock>
						<p>I am developing an e-app admin panel for catering establishments. I create and improve online stores for popular chains of pizzerias, rolls, and more. I make applications for the delivery of goods.</p>
					</MessageBlock>
					<Skills data={skills} />
					<WorkHistory data={history} />
					<Button className="button-resume" appearance="primary" size="middle">Download Resume</Button>
				</Wrapper>
			</Container>
		</AboutMeBlockSection>
	);
};