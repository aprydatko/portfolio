import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ProjectInfo, InfoWrap, Title, YearValue, Value, List, Item } from './LeftBlock.styles';
import json from '../../../locales/en/project_zorro.json';
import { LeftBlockProps } from './LeftBlock.props';

export const LeftBlock = ({ page }: LeftBlockProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<ProjectInfo>
			<InfoWrap>
				<Title>{t(`${page}:header.yearName`)}</Title>
				<YearValue>{t(`${page}:header.year`)}</YearValue>
			</InfoWrap>
			<InfoWrap>
				<Title>{t(`${page}:header.technologyName`)}</Title>
				<Value>{t(`${page}:header.technology`)}</Value>
			</InfoWrap>
			<List>
				{json.header.skills.map((_, index) => 
					<Item key={index}>{t(`${page}:header.skills.${index}`)}</Item>)}
			</List>
		</ProjectInfo>
	);
};