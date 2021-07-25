import React from 'react';
import Trans from 'next-translate/Trans';
import { Htag } from '../../../../components';
import useTranslation from 'next-translate/useTranslation';
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

export const MyResumeBlock = (): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<AboutMeBlockSection>
			<Htag tag="h2">{t('home:resume.title')}</Htag>
			<Container>
				<Successful />
				<Wrapper>
					<MessageBlock>
						<Trans
							i18nKey="home:resume.resume"
							components={[<p></p>]}
						/>
					</MessageBlock>
					<Skills data={skills} />
					<WorkHistory />
					<Button className="button-resume" appearance="primary" size="middle">{t('home:resume.button')}</Button>
				</Wrapper>
			</Container>
		</AboutMeBlockSection>
	);
};