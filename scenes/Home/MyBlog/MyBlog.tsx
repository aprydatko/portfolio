import React from 'react';
import { Button, Htag } from '../../../components';
import { HeadlineDescription } from '../../../components/HeadlineDescription/HeadlineDescription';
import { GridContent } from '../../../styles/Grid';
import { Container, Articles, Article, DateContainer, TimeRead, Date, ContentContainer, Title, Content, ArticlesWrap, ArticleContentWrap } from './MyBlog.styles';

const description = [
		'Suspendisse potenti. Sed egestas eros eu libero posuere ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.',
		'Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut'
];

const articles = [
	{
		id: 0,
		date: '16 May 2021',
		time: 8,
		title: 'Usability Secrets to Create Better User Interfaces',
		content: 'Conec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo.',
	},
	{
		id: 1,
		date: '15 May 2021',
		time: 5,
		title: '10 Useful Tips to Improve Your UI Designs',
		content: 'Conec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo.',
	},
	{
		id: 2,
		date: '14 May 2021',
		time: 10,
		title: 'How to Become a Successful UI/UX Designer',
		content: 'Conec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo.',
	}
];

export const MyBlog = (): JSX.Element => {
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">My Blog</Htag>
				<HeadlineDescription className="my-blog" data={description} />
			</GridContent>
			<Articles>
				{articles.map(({ id, date, time, title, content }, index) => (
					<Article key={id} className={index % 2 != 0 ? 'black' : ''}>
						<GridContent>
							<ArticleContentWrap>
								<DateContainer>
									<TimeRead>{time + ' Mins Read'}</TimeRead>
									<Date>{date}</Date>
								</DateContainer>
								<ContentContainer>
									<Htag className="blog-title" tag="h3">{title}</Htag>
									<Content>{content}</Content>
									<Button className="blog-button" appearance="nostroke" size="small">Read more</Button>
								</ContentContainer>
							</ArticleContentWrap>
						</GridContent>
					</Article>
				))}
			</Articles>
		</Container>
	);
};