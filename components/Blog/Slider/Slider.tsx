import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { GridContent } from '../../../styles/Grid';
import { Container, Wrapper, Item } from './Slider.styles';
import { SliderProps } from './Slider.props';

export const Slider = ({ page }: SliderProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<Wrapper>
				{[0, 1].map(item => <Item style={{
					backgroundImage: `url(${t(`${page}:body.images.${item}`)})`,
					width: `calc(100% / ${[0, 1].length})`
				}} />)}
			</Wrapper>
		</Container>
	);
};