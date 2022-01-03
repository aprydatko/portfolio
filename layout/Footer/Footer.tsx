import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Social } from '../../components';
import { FooterProps } from './Footer.props';
import { GridContent } from '../../styles/index';
import { Container, FooterWrap, Info, Desinged } from './Footer.styles';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
	const { t } = useTranslation();
	const d = new Date();
	const year = d.getFullYear();
	const getDate = (date: number): string | number => {
		if (date !== year) {
			return `2021 - ${year}`;
		}

		return date;
	};
	return (
		<Container>
			<GridContent>
				<FooterWrap style={{
					borderTop: '1px solid #ebe7e0',
				}}>
					<Social className="social" icons={['linkendin', 'gmail', 'github']} />
					<Info>© {getDate(year)}{', '}{'artyrpridatko.com.ua - '} {t('home:footer.copyright')}</Info>
					<Desinged>
						{t('home:footer.designedBy')}
						<a target="blank" href="https://themeforest.net/item/ober-resume-cv-landing-page-psd-template/32500078#">WebDuck</a>
					</Desinged>
				</FooterWrap>
			</GridContent>
		</Container>
	);
};