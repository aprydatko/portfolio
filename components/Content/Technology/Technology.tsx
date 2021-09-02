import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { GridContent } from '../../../styles/Grid';
import { Container, Wrapper, List, Item } from './Technology.styles';
import { TechnologyProps } from './Technology.props';
import { Htag } from '../../Htag/Htag';

export const Technology = ({ page, technology, skills }: TechnologyProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<GridContent>
				<Wrapper>
					{technology.map(i => 
						<div key={i}>
							<Htag className="title" tag="h5">{t(`${page}:body.technology.${i}.title`)}</Htag>
							<List>
								{skills.map(k => 
									<Item>{t(`${page}:body.technology.${i}.list.${k}`)}</Item>)}
							</List>
						</div>
					)}
				</Wrapper>
			</GridContent>
		</Container>
	);
};