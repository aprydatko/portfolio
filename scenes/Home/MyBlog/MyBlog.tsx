import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { Button, Htag } from '../../../components';
import { HeadlineDescription } from '../../../components/HeadlineDescription/HeadlineDescription';
import { GridContent } from '../../../styles/Grid';
import { Container, Articles, Article, DateContainer, TimeRead, Date, ContentContainer, Content, ArticleContentWrap } from './MyBlog.styles';
import { MyBlogProps } from './MyBlog.props';

const ArticleComponent = ({ index, t }: MyBlogProps) => {
	return (
		<Article key={index} className={index % 2 != 0 ? 'black' : ''}>
			<GridContent>
				<ArticleContentWrap>
					<DateContainer>
						<TimeRead>{t(`home:blog.articles.${index}.time`) + ' Mins Read'}</TimeRead>
						<Date>{t(`home:blog.articles.${index}.date`)}</Date>
					</DateContainer>
					<ContentContainer>
						<Htag className="blog-title" tag="h3">{t(`home:blog.articles.${index}.title`)}</Htag>
						<Trans
							i18nKey={'home:blog.description'}
							components={[<Content></Content>]}
						/>
						<Button className="blog-button" appearance="nostroke" size="small">{t(`home:blog.articles.${index}.button`)}</Button>
					</ContentContainer>
				</ArticleContentWrap>
			</GridContent>
		</Article>
	);
};

export const MyBlog = (): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">{t('home:blog.title')}</Htag>
				<HeadlineDescription className="my-blog" pageName="home" sectionName="blog" />
			</GridContent>
			<Articles>
				{[0, 1, 2].map(count =>  <ArticleComponent t={t} index={count} />)}
			</Articles>
		</Container>
	);
};