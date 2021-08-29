import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 100px 0 50px 0;
	background-color: ${({ theme }) => theme.color.main.white};
	text-align: center;
`;

export const Question = styled.h3`
	margin-bottom: 0;
	font-family: ${({ theme }) => theme.fontFamily.secondary};
	font-size: ${({ theme }) => theme.fontSize[2]};
	font-weight: 300;
`;

export const Email = styled.a`
	font-family: ${({ theme }) => theme.fontFamily.secondary};
	font-size: 80px;
	font-weight: 300;
	color: ${({ theme }) => theme.color.font.secondary};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;