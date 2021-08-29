import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import QuoteIcon from '../../assets/icons/quote-icon.svg';
import { TestimonialsProps, TestimonialProps } from './Testimonials.props';
import { Avatar, Container, Content, Name, PersonWrap, Position, QuoteWrap, TestimonialsItem, TestimonialsList } from './Testimonials.styles';

const Testimonial = ({ t, index }: TestimonialProps): JSX.Element => {
	return (
		<TestimonialsItem className={index === 2 ? 'active' : ''}>
			<Avatar className="avatar"></Avatar>
			<PersonWrap className="person-wrap">
				<Name>{t(`home:prising.reviews.${index}.name`)}</Name>
				<Position>{t(`home:prising.reviews.${index}.position`)}</Position>
			</PersonWrap>
		</TestimonialsItem>
	);
};

export const Testimonials = ({ className }: TestimonialsProps): JSX.Element => {
	const { t } = useTranslation();
	return (
		<Container className={className}>
			<QuoteWrap>
				<QuoteIcon />
			</QuoteWrap>
			<Content>{t(`home:prising.reviews.${2}.description`)}</Content>
			<TestimonialsList>
				{[0, 1, 2, 3, 4].map(index => <Testimonial index={index} t={t} />)}
			</TestimonialsList>
		</Container>
	);
};