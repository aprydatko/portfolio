import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { GridContent } from '../../../styles/Grid';
import { Header, Content, Container } from './Block.styles';
import { Htag, LeftBlock } from '../../../components';
import { BlockProps } from './Block.props';

export const Block = ({ page, leftBlock, title, description, tag, firstBold, bold, className }: BlockProps): JSX.Element => {
	const { t, lang } = useTranslation();
	const Wrapper = ({ children }) => leftBlock ? <Header>{children}</Header> : children;
	return (
		<Container className={`${tag !== 'h2' ? 'title': 'header'} ${className}`}>
			<GridContent>
				<Htag className="block" tag={tag}>{t(`${page}:${title}`)}</Htag>
				<Wrapper>
					<Content className={`${tag !== 'h2' ? 'title': 'header'} ${firstBold ? 'first-bold': ''} ${bold ? 'bold': ''}`}>
						<Trans
							i18nKey={`${page}:${description}`}
							components={[<p></p>]}
						/>
					</Content>
					{leftBlock && <LeftBlock page={page} />}
				</Wrapper>
			</GridContent>
		</Container>
	);
};