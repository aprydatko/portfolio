import React from 'react';
import QuoteIcon from '../../assets/icons/quote-icon.svg';
import { TestimonialsProps } from './Testimonials.props';
import { Avatar, Container, Content, Name, PersonWrap, Position, QuoteWrap, TestimonialsItem, TestimonialsList } from './Testimonials.styles';

export const Testimonials = ({ className }: TestimonialsProps): JSX.Element => {
	return (
		<Container className={className}>
			<QuoteWrap>
				<QuoteIcon />
			</QuoteWrap>
			<Content>Sed vel mattis dolor. Vestibulum gravida, dolor vel dapibus bibendum, velit enim finibus mauris, in volutpat arcu magna ac metus. Sed condimentum, erat vel sodales pharetra, ligula massa maximus dolor</Content>
			<TestimonialsList>
				<TestimonialsItem>
					<Avatar className="avatar"></Avatar>
					<PersonWrap className="person-wrap">
						<Name>Jennifer Smith</Name>
						<Position>CEO & Founder</Position>
					</PersonWrap>
				</TestimonialsItem>
				<TestimonialsItem>
					<Avatar className="avatar"></Avatar>
					<PersonWrap className="person-wrap">
						<Name>Jennifer Smith</Name>
						<Position>CEO & Founder</Position>
					</PersonWrap>
				</TestimonialsItem>
				<TestimonialsItem className="active">
					<Avatar className="avatar"></Avatar>
					<PersonWrap className="person-wrap">
						<Name>Jennifer Smith</Name>
						<Position>CEO & Founder</Position>
					</PersonWrap>
				</TestimonialsItem>
				<TestimonialsItem>
					<Avatar className="avatar"></Avatar>
					<PersonWrap className="person-wrap">
						<Name>Jennifer Smith</Name>
						<Position>CEO & Founder</Position>
					</PersonWrap>
				</TestimonialsItem>
				<TestimonialsItem>
					<Avatar className="avatar"></Avatar>
					<PersonWrap className="person-wrap">
						<Name>Jennifer Smith</Name>
						<Position>CEO & Founder</Position>
					</PersonWrap>
				</TestimonialsItem>
			</TestimonialsList>
		</Container>
	);
};