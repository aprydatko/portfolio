import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Container, Head, Image, Wrapper } from './blog.styles';
import { HeaderBlog } from '../../components';
import { ProjectsProps } from './blog.props';

export const BlogTemplate = ({ children, page }: ProjectsProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Container>
			<Head>
				<HeaderBlog
					className="blog-header"
					tag="h1" 
					page={page} 
					title="title"
					description="header.description"
					leftBlock={true}
					firstBold={true}
					titleBlock="author" 
					titleTextBlock="authorName"
					categoryBlock="category"
					categoryTextBlock="categoryName"
				/>
			</Head>
			<Image 
				style={{ backgroundImage: `url(${t(`${page}:header.imgUrl`)})` }} 
			/>
			<Wrapper>
				{children}
			</Wrapper>
		</Container>
	);
};