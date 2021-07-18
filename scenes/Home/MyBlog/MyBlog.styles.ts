import styled from 'styled-components';

export const Container = styled.div`
	padding-bottom: 83px;
	position: relative;
	background-color: ${({ theme }) => theme.color.body.secondary};
	// background-image: url(/my-projects-effect-one.svg);
	background-size: inherit;
	background-repeat: no-repeat;
	background-position: 0 100%;

	& .my-blog > div {
		margin-top: 90px;
	}

	& .my-blog > div > div:first-child > p {
		font-weight: 400;
	}

	& h2 {
		position: absolute;
    	top: -55px;
	}

	& .button-load {
		display: block;
		margin: 0 auto;
	}
`;

export const Articles = styled.div`
	margin-top: 80px;

	& .black{
		color: ${({ theme }) => theme.color.main.white};
		background-color:  ${({ theme }) => theme.color.main.black};

		& .blog-title {
			color: ${({ theme }) => theme.color.main.white};
		}
	}
`;

export const ArticleContentWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 78px;
	padding-bottom: 60px;
`;

export const Article = styled.div`
	// padding-top: 16px;
`;

export const DateContainer = styled.div`
	margin-left: 88px;
	min-width: 135px;
	text-align: right;
	
	&.black {

	}
`;

export const ContentContainer = styled.div`
	margin-left: 103px;
	width: 670px;

	& .blog-title {
		text-transform: inherit;
		line-height: 1.15;
		margin-top: -5px;
	}

	& .blog-button {
		margin-left: -15px;\
		&:hover {
			color: inherit;
			background: none;
		}
	}
`;

export const TimeRead = styled.div`
	font-size: ${({ theme }) => theme.fontSize[1]};
	line-height: 1;
	font-weight: bold;
	text-align: right;
`;

export const Date = styled.div`
	margin-top: 5px;
	font-size: 14px;
	font-weight: 300;
	text-align: right;
`;

export const Content = styled.p`
	font-size: ${({ theme }) => theme.fontSize[0]};
	font-weight: 300;
	text-align: left;
`;