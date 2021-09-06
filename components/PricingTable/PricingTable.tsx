import React from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '../Button/Button';
import { ItemComponentProps } from './PricingTable.props';
import { Direction, TableHeadline, TableItem, TableName, TablePrice, TableWrap, WorksList } from './PricingTable.styles';

const ItemComponent = ({ t, index }: ItemComponentProps): JSX.Element => {
	return (
		<TableItem key={index}>
			<TableName>{t(`home:prising.tables.${index}.title`)}</TableName>
			<TableHeadline>{t(`home:prising.tables.${index}.subTitle`)}</TableHeadline>
			<TablePrice>{t(`home:prising.tables.${index}.price`)}</TablePrice>
			<WorksList>
				<Trans
					i18nKey={`home:prising.tables.${index}.skills`}
					components={[<Direction></Direction>]}
				/>
			</WorksList>
			<Button className={`button-full-time ${index === 1 ? 'button-middle' : ''}`} appearance="ghost">{t(`home:prising.tables.${index}.button`)}</Button>
		</TableItem>
	);
};

export const PricingTable = (): JSX.Element => {
	const { t } = useTranslation();
	return (
		<TableWrap>
			{[0, 1, 2].map((index => <ItemComponent index={index} t={t} />))}
		</TableWrap>
	);
};