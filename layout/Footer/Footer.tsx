import React from 'react';
import { Social } from '../../components';
import { FooterProps } from './Footer.props';
import { GridContent } from '../../styles/index';
import { Container, FooterWrap, Info, Desinged } from './Footer.styles';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
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
				<FooterWrap>
					<Social className="social" icons={['linkendin', 'gmail', 'github']} />
					<Info>© {getDate(year)} RobertLong.com, All Rights Reserved</Info>
					<Desinged>Designed by WebDuck</Desinged>
				</FooterWrap>
			</GridContent>
		</Container>
	);
};