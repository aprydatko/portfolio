import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { Button, Htag } from '../../../components';
import { HeadlineDescription } from '../../../components/HeadlineDescription/HeadlineDescription';
import { GridContent } from '../../../styles/Grid';
import { Container, Articles, Article, DateContainer, TimeRead, Date, ContentContainer, Content, ArticleContentWrap, PaginationWrap, List, Item } from './MyBlog.styles';
import { MyBlogProps } from './MyBlog.props';
import Arrow from '../../../assets/icons/arrow.svg';
import articleJson from '../../../locales/en/blog.json';

const ArticleComponent = ({ index, t }: MyBlogProps) => {
	return (
		<Article key={index} className={index % 2 != 0 ? 'black' : ''}>
			<GridContent>
				<ArticleContentWrap>
					<DateContainer>
						<TimeRead>{t(`blog:articles.${index}.time`) + ' Mins Read'}</TimeRead>
						<Date>{t(`blog:articles.${index}.date`)}</Date>
					</DateContainer>
					<ContentContainer>
						<Htag className="blog-title" tag="h3">{t(`blog:articles.${index}.title`)}</Htag>
						<Trans
							i18nKey={`blog:articles.${index}.description`}
							components={[<Content></Content>]}
						/>
						<Button className="blog-button" appearance="nostroke" size="small">{t(`blog:articles.${index}.button`)}</Button>
					</ContentContainer>
				</ArticleContentWrap>
			</GridContent>
		</Article>
	);
};

const Pagination = ({ index }: { index: number }) => {
	return (
		<List>
			<Item>{index}</Item>
		</List>
	);
};

export const MyBlog = (): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">{t('blog:title')}</Htag>
				<HeadlineDescription className="my-blog" pageName="blog" sectionName="" />
			</GridContent>
			<Articles>
				{articleJson.articles.map((item, index) =>  <ArticleComponent t={t} index={index} />)}
				<PaginationWrap>
					<Arrow className="left" />
					{articleJson.articles.map((item, index) => <Pagination index={index + 1} />)}
					<Arrow className="right" />
				</PaginationWrap>
			</Articles>
		</Container>
	);
};