import React from 'react';
import { Htag } from '../../../../components';
import { AboutMeBlockSection, Container, MessageBlock, Wrapper } from './MyResume.styles';

import { Successful } from '../Successful/Successful';
import { Button, Skills } from '../../../../components';
import { WorkHistory } from '../WorkHistory/WorkHistory';

const skills = [
	{
		id: 0,
		name: 'Photoshop',
		percent: 9
	},
	{
		id: 1,
		name: 'Ilustrator',
		percent: 8
	},
	{
		id: 2,
		name: 'HTML',
		percent: 7
	},
	{
		id: 3,
		name: 'CSS',
		percent: 4
	},
	{
		id: 4,
		name: 'JQuery',
		percent: 3
	}
];

const history = {
	education: [
		{
			date: '2010 - 2012',
			position: 'Master in Graphic',
			place: 'New York University'
		},
		{
			date: '2006 - 2009',
			position: 'Bachelors of FineArt',
			place: 'New York University'
		}
	],
	expertise: [
		'Logo Designing',
		'Website Designing',
		'Branding',
		'Website Development',
		'Character Designing'
	],
	awards: [
		{
			date: '2015',
			place: 'Art of the Week',
			description: 'Euismod vel bibendum ultrices, fringilla vel eros. Donec euism'
		},
		{
			date: '2014',
			place: 'Best Desinger',
			description: 'Euismod vel bibendum ultrices, fringilla vel eros. Donec euism'
		}
	],
	expirience: [
		{
			date: '2014 - Present',
			name: 'Soft Tech Inc',
			position: 'UI Head & Manager',
			description: 'Euismod vel bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed.'
		},
		{
			date: '2010 - 2014',
			name: 'Kana Design Studio',
			position: 'UI / UX Specialist',
			description: 'Euismod vel bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed.'
		},
		{
			date: '2009 - 2010',
			name: 'Paperart',
			position: 'Graphic Designer',
			description: 'Euismod vel bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed.'
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
						<p>Talented UX designer with 7+ years of experience, seeking to elevate UI/UX at ABC, Inc. As Lead UI/UX Head completed project before dead line. ittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euism od leo um, at pellentesque velituis a congue sem. </p>
					</MessageBlock>
					<Skills data={skills} />
					<WorkHistory data={history} />
					<Button className="button-resume" appearance="primary">Download Resume</Button>
				</Wrapper>
			</Container>
		</AboutMeBlockSection>
	);
};