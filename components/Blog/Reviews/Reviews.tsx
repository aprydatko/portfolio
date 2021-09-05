import React from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { GridContent } from '../../../styles/Grid';
import { Container, Wrapper, Content, AvatarWrap, Avatar, Name, Position } from './Reviews.styles';
import { ReviewsProps } from './Reviews.props';

import Quotes from '../../../assets/icons/quotes.svg';

export const Reviews = ({ page, className }: ReviewsProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container className={className}>
			<GridContent>
				<Wrapper>
					<Quotes className="quotes-icon" />
					<Content>
						<Trans
							i18nKey={`${page}:body.reviews.description`}
							components={[<p></p>]}
						/>
					</Content>
					<AvatarWrap>
						<Avatar style={{ backgroundImage: `url(${t(`${page}:body.reviews.avatar`)})` }} />
						<Name>{t(`${page}:body.reviews.author`)}</Name>
						<Position>{t(`${page}:body.reviews.position`)}</Position>
					</AvatarWrap>
				</Wrapper>
			</GridContent>
		</Container>
	);
};