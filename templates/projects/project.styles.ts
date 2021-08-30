import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 160px;
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

	@media screen and (max-width: 960px) {
		padding-bottom: 60px;
	}
`;

export const Articles = styled.div`
	margin-top: 80px;

	// & .black{
	// 	color: ${({ theme }) => theme.color.main.white};
	// 	background-color:  ${({ theme }) => theme.color.main.black};

	// 	& .blog-title {
	// 		color: ${({ theme }) => theme.color.main.white};
	// 	}

	// 	@media screen and (max-width: 960px) {
	// 		color: ${({ theme }) => theme.color.font.primary};
	// 		background-color:  ${({ theme }) => theme.color.body.secondary};

	// 		& .blog-title {
	// 			color: ${({ theme }) => theme.color.font.primary};
	// 		}
	// 	}
	// }

`;

export const ArticleContentWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 35px;
	padding-bottom: 35px;

	@media screen and (max-width: 960px) {
		padding-top: 38px;
		padding-bottom: 30px;
		justify-content: flex-start;
    	align-items: flex-start;
		flex-direction: column;
	}
`;

export const Article = styled.div`
	// padding-top: 16px;
`;

export const DateContainer = styled.div`
	margin-left: 88px;
	min-width: 135px;
	text-align: right;

	@media screen and (max-width: 960px) {
		margin-left: 0px;
		margin-bottom: 24px;
		text-align: left;
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

	@media screen and (max-width: 960px) {
		margin-left: 0px;
		width: 100%;
	}
`;

export const TimeRead = styled.div`
	font-size: ${({ theme }) => theme.fontSize[1]};
	line-height: 1;
	font-weight: bold;
	text-align: right;

	@media screen and (max-width: 960px) {
		text-align: left;
	}
`;

export const Date = styled.div`
	margin-top: 5px;
	font-size: 14px;
	font-weight: 300;
	text-align: right;

	@media screen and (max-width: 960px) {
		text-align: left;
	}
`;

export const Content = styled.p`
	font-size: ${({ theme }) => theme.fontSize[0]};
	font-weight: 300;
	text-align: left;
`;

export const PaginationWrap = styled.ul`
	margin-top: 60px;
	display: flex;
	justify-content: center;

	& > .left {
		position: relative;
		top: 4px;
		left: -16px;
		transform: scale(.6);
	}

	& > .right {
		position: relative;
		top: 4px;
		left: 16px;
		transform: scale(.6) rotate(180deg);
	}

	& li.active {
		background: ${({ theme }) => theme.color.main.orange};

		& > a {
			color: ${({ theme }) => theme.color.main.white};

		}
	}
`;

export const List = styled.li`
	padding: 0 8px;
	margin: 0 6px;
	text-align: center;
	background: transparent;
	border-radius: 4px;

	&:hover {
		background: ${({ theme }) => theme.color.main.orange};
		cursor: pointer;
		
		& > a {
			color: ${({ theme }) => theme.color.main.white};

		}
	}
`;

export const Item = styled.a`
	display: block;
	font-family: ${({ theme }) => theme.fontFamily.primary};
	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 700;
	line-height: 30px;
	color: ${({ theme }) => theme.color.font.primary};
`;