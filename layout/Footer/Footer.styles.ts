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

	& > ul {
		align-items: center;
		& > li {
			margin-right: 22px;
		}
	}

	& .social {
		width: 10px;
		& > svg {
			width: 14px;
		}
		& > .gmail {
			top: 1px;
		}
	}
`;	