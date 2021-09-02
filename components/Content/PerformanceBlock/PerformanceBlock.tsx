import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { GridContent } from '../../../styles/Grid';
import { Container, Wrapper, Img } from './PerformanceBlock.styles';
import { Htag } from '../..';
import { PerformanceProps } from './PerformanceBlock.props';

export const PerformanceBlock = ({ page }: PerformanceProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<GridContent>
				<Htag className="title" tag="h1">{t(`${page}:body.performance.title`)}</Htag>
			</GridContent>
			<Wrapper style={{
				// backgroundImage: `url(${t(`${page}:body.performance.imgUrl`)})`
			}}>
				<Img src={t(`${page}:body.performance.imgUrl`)} alt={t(`${page}:body.performance.title`)} />
			</Wrapper>
		</Container>
	);
};