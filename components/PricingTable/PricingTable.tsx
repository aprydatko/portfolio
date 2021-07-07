import React from 'react';
import { Button } from '../Button/Button';
import { Direction, TableHeadline, TableItem, TableName, TablePrice, TableWrap, WorksList } from './PricingTable.styles';

export const PricingTable = (): JSX.Element => {
	return (
		<TableWrap>
			<TableItem>
				<TableName>Full Time</TableName>
				<TableHeadline>Available for Full Time</TableHeadline>
				<TablePrice>$1200</TablePrice>
				<WorksList>
					<Direction>Brand Design</Direction>
					<Direction>Advertising</Direction>
					<Direction>Web Development</Direction>
					<Direction>Photography</Direction>
				</WorksList>
				<Button className="button-full-time" appearance="ghost">Hire Me</Button>
			</TableItem>
			<TableItem>
				<TableName>Project Wise</TableName>
				<TableHeadline>Available for Freelancing</TableHeadline>
				<TablePrice>$400</TablePrice>
				<WorksList>
					<Direction>Brand Design</Direction>
					<Direction>Advertising</Direction>
					<Direction>Web Development</Direction>
					<Direction>Photography</Direction>
				</WorksList>
				<Button className="button-full-time" appearance="primary">Hire Me</Button>
			</TableItem>
			<TableItem>
				<TableName>Hourley</TableName>
				<TableHeadline>Available for Hourley Basis</TableHeadline>
				<TablePrice>$60</TablePrice>
				<WorksList>
					<Direction>Brand Design</Direction>
					<Direction>Advertising</Direction>
					<Direction>Web Development</Direction>
					<Direction>Photography</Direction>
				</WorksList>
				<Button className="button-full-time" appearance="ghost">Hire Me</Button>
			</TableItem>
		</TableWrap>
	);
};