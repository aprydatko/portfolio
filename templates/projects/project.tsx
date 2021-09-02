import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Container, Head, Image, Wrapper } from './project.styles';
import { Block, NextProject } from '../../components';
import { ProjectsProps } from './project.props';

export const ProjectTemplate = ({ children, page }: ProjectsProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<Head>
				<Block
					tag="h2" 
					page={page} 
					title="title"
					description="header.description"
					leftBlock={true}
					firstBold={true}
				/>
			</Head>
			<Image 
				style={{ backgroundImage: `url(${t(`${page}:header.imgUrl`)})` }} 
			/>
			<Wrapper>
				{children}
			</Wrapper>
			<NextProject />
		</Container>
	);
};