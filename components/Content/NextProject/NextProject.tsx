import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { GridContent } from '../../../styles/Grid';
import { Container, Wrapper, ImgWrap } from './NextProject.styles';
import { Htag } from '../../../components';
import { NextProjectProps } from './NextProject.props';
import Arrow from '../../../assets/icons/arrow.svg';

export const NextProject = (): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<GridContent>
				<div>
					<span>Next Project</span>
					<Htag className="block" tag="h3">Zorro</Htag>
				</div>
				<Wrapper>
					<p>Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornar.</p>
					<Arrow className="arrow-icon" />
				</Wrapper>
				<ImgWrap style={{ backgroundImage: `url()` }} />
			</GridContent>
		</Container>
	);
};