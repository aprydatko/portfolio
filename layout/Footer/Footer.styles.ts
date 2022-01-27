import styled from 'styled-components';

export const Container = styled.div`
	background: ${({ theme }) => theme.color.main.white};

`;	

export const FooterWrap = styled.footer`
	display: flex;
	justify-content: space-between;

	padding-top: 74px;
	padding-bottom: 50px;

	font-size: 15px;
	line-height: 1.3;
	font-weight: 300;
	color: ${({ theme }) => theme.color.main.black};

	& > ul {
		align-items: center;
		z-index: 0;
		@media screen and (max-width: 960px) {
			margin-bottom: 30px;
		}
		& > li {
			margin-right: 22px;
		}
	}

	& .social {
		width: 10px;
		@media screen and (max-width: 960px) {
			width: 30px;
		}

		& > svg {
			width: 14px;
			@media screen and (max-width: 960px) {
				width: 30px;
			}
		}
		& > .gmail {
			top: 1px;
			@media screen and (max-width: 960px) {
				top: 4px;
			}
		}
	}

	@media screen and (max-width: 960px) {
		padding-top: 40px;
		padding-bottom: 30px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;	

export const Info = styled.div`
	color: ${({ theme }) => theme.color.main.black};
	@media screen and (max-width: 960px) {
		line-height: 2;
	}

	@media screen and (max-width: 650px) {
		text-align: center;
	}
`;

export const Desinged = styled.div`
	& > a {
		text-decoration: none;
		color: ${props => props.theme.color.main.orange};
	}

	@media screen and (max-width: 960px) {
		line-height: 2;
	}
`;