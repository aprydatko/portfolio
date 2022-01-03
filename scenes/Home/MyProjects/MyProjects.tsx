import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button, Htag } from '../../../components';
import { FullImgComponentProps, ProjectComponentProps } from './MyProjects.props';
import { HeadlineDescription } from '../../../components/HeadlineDescription/HeadlineDescription';
import { GridContent } from '../../../styles/Grid';
import { ButtonWrap, Container, Position, Project, ProjectDescriptionWrap, ProjectImage, ProjectInfo, Projects, Year, FullImg, FullImgWrap } from './MyProjects.styles';
import IconClose from '../../../assets/icons/menu-close.svg';

const FullImgComponent = ({ handleImgOrigin, index }: FullImgComponentProps) => {
	const { t } = useTranslation();
	return (
		<FullImgWrap>
			<FullImg
				onClick={handleImgOrigin} 
				style={{
					backgroundImage: `url(${t(`home:projects.items.${index}.originalImgUrl`)})`
				}}>
				<IconClose className="close" />
			</FullImg>
		</FullImgWrap>
	);
};

const ProductImage = ({ handleImgOrigin, index }: FullImgComponentProps) => {
	const { t } = useTranslation();
	return (
		<div>
			<ProjectImage onClick={handleImgOrigin}>
				<img src={t(`home:projects.items.${index}.imgUrl`)} />
			</ProjectImage>
			<Year>{t(`home:projects.items.${index}.year`)}</Year>
		</div>
	);
};

const ProductDescription = ({ index }: { index: number }) => {
	const { t } = useTranslation();
	return (
		<ProjectDescriptionWrap>
			<Htag tag="h4">{t(`home:projects.items.${index}.title`)}</Htag>
			<ProjectInfo>
				<Position>{t(`home:projects.items.${index}.position`)}</Position>
				<p>{t(`home:projects.items.${index}.description`)}</p>
			</ProjectInfo>
		</ProjectDescriptionWrap>
	);
};

const ProjectComponent = ({ index, t }: ProjectComponentProps):JSX.Element => {
	const [isOrigin, setIsOrigin] = useState(false);
	const handleImgOrigin = () => {
		setIsOrigin(!isOrigin);
	};
	return (
		<Project key={index}>
			{isOrigin && <FullImgComponent handleImgOrigin={handleImgOrigin} index={index} />}
			<ProductImage handleImgOrigin={handleImgOrigin} index={index} />
			<ProductDescription index={index} />
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