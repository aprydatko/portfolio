import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { GridContent } from '../../../styles';
import { Container, Wrapper, Item, List } from './Tags.styles';
import { TagsProps } from './Tags.props';
import { Social } from '../..';
import Link from 'next/link';

export const Tags = ({ page }: TagsProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<GridContent>
				<Wrapper>
					<List>
						Tag: {[0, 1, 2].map(item => <Item>
						<Link href="/#">{t(`${page}:footer.tags.${item}`) + `${[0, 1, 2].length !== item + 1 ? ',' : ''}`}</Link>
						</Item>)}
					</List>
					<Social icons={['linkendin', 'gmail', 'github']} />
				</Wrapper>
			</GridContent>
		</Container>
	);
};