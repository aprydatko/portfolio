import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button, Htag } from '../../../components';
import { FullImgComponentProps, ProjectComponentProps } from './MyProjects.props';
import { HeadlineDescription } from '../../../components/HeadlineDescription/HeadlineDescription';
import { GridContent } from '../../../styles/Grid';
import projectJson from '../../../locales/en/projects.json';
import { ButtonWrap, Container, Position, Project, ProjectDescriptionWrap, ProjectImage, ProjectInfo, Projects, Year, FullImg, FullImgWrap, ButtonClose } from './MyProjects.styles';
import IconClose from '../../../assets/icons/menu-close.svg';

const FullImgComponent = ({ handleImgOrigin, index }: FullImgComponentProps) => {
	const { t } = useTranslation();
	return (
		<FullImgWrap>
			<FullImg
				onClick={handleImgOrigin} 
				style={{
					backgroundImage: `url(${t(`projects:items.${index}.originalImgUrl`)})`
				}}>
				<IconClose className="close" />
			</FullImg>
		</FullImgWrap>
	);
};

const ProductImage = ({ index }: { index: number }) => {
	const { t } = useTranslation();
	return (
		<div>
			<ProjectImage style={{
				backgroundImage: `url(${t(`projects:items.${index}.imgUrl`)})`
			}}>
				<ProductDescription index={index} />
			</ProjectImage>
		</div>
	);
};

const ProductDescription = ({ index }: { index: number }) => {
	const { t } = useTranslation();
	return (
		<ProjectDescriptionWrap>
			<Htag tag="h4">{t(`projects:items.${index}.title`)}</Htag>
			<ProjectInfo>
				<p>{t(`projects:items.${index}.description`)}</p>
			</ProjectInfo>
		</ProjectDescriptionWrap>
	);
};

const ProjectComponent = ({ index, t }: ProjectComponentProps):JSX.Element => {
	return (
		<Project key={index}>
			{/* {isOrigin && <FullImgComponent handleImgOrigin={handleImgOrigin} index={index} />} */}
			<ProductImage index={index} />
			{/* <ProductDescription index={index} /> */}
		</Project>
	);
};

export const MyProjects = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">{t('projects:title')}</Htag>
				<HeadlineDescription className="my-projects" pageName="projects" />
				<Projects>
					{projectJson.items.map((item, index) => 
						<ProjectComponent index={index} t={t} />)}
				</Projects>
				<ButtonWrap>
					<Button className="button-load" appearance="primary" size="middle">{t('projects:button')}</Button>
				</ButtonWrap>
			</GridContent>
		</Container>
	);
};