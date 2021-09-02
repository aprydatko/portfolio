import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { GridContent } from '../../../styles/Grid';
import { Header, Content, Container, Image, ImageWrap } from './ImageBlock.styles';
import { ImageBlockProps } from './ImageBlock.props';

export const ImageBlock = ({ page, images }: ImageBlockProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<GridContent>
				<ImageWrap>
					{images.map((_, index) => 
						<Image 
							style={{ 
								backgroundImage: `url(${t(`${page}:body.images.${index}`)})`,
								width: images.length === 1 ? '100%' : '46%'
							}} />)}
				</ImageWrap>
			</GridContent>
		</Container>
	);
};