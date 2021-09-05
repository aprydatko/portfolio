import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { GridContent } from '../../../styles/Grid';
import { Container, Wrapper,Paragraph, WrapList } from './ListBlock.styles';
import { BlockProps } from './ListBlock.props';
import { Reviews } from '../..';

export const ListBlock = ({ page }: BlockProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<GridContent>
				<WrapList>
					<Wrapper>
						{[0, 1, 2].map(item =>
							<Paragraph key={item}>{t(`${page}:body.listBlock.${item}`)}</Paragraph>)}
					</Wrapper>
					<Reviews page={page} />
				</WrapList>
			</GridContent>
		</Container>
	);
};