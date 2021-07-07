import React from 'react';
import { GridContent } from '../../../styles';
import { Htag, PricingTable, Testimonials } from '../../../components';
import { HeadlineDescription } from '../../../components/HeadlineDescription/HeadlineDescription';
import { Container } from './Pricing.styles';

const description = [
	'Are you interested to work with me ? Here are my price list for design related work. [Lets talk](https://www.google.com) about project ! ',
	'Donec imperdiet risus at tortor consequat maximus et.'
];

export const Pricing = (): JSX.Element => {
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">Pricing Table</Htag>
				<HeadlineDescription className="pricing-table" data={description} />
				<PricingTable />
				<Testimonials className="prising-testimonials" />
			</GridContent>
		</Container>
	);
};