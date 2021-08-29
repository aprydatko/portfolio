import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { GridContent } from '../../../styles';
import { Htag, PricingTable, Testimonials } from '../../../components';
import { HeadlineDescription } from '../../../components/HeadlineDescription/HeadlineDescription';
import { Container } from './Pricing.styles';

export const Pricing = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">{t('home:prising.title')}</Htag>
				<HeadlineDescription className="pricing-table" pageName="home" sectionName="prising" />
				<PricingTable />
				<Testimonials className="prising-testimonials" />
			</GridContent>
		</Container>
	);
};