import styled from 'styled-components';

export const MenuBlock = styled.div`
	// position: relative;
	display: flex;
`;

export const ThemeBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Email = styled.a`
	margin-left: 106px;

	font-size: ${({ theme }) => theme.fontSize[0]};
	font-weight: 700;
	line-height: 30px;

	color: ${({ theme }) => theme.color.font.primary};
	text-decoration: none;
	transition: 225ms;

	&:hover {
		color: ${({ theme }) => theme.color.font.secondary};
		transition: 225ms;
	}
`;

export const HiddenMenu = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;

export const Line = styled.div`
	margin: 0 14px;
	width: 1px;
	height: 25px;
	background: ${({ theme }) => theme.color.body.secondary};

	&.dark-line {
		background: ${({ theme }) => theme.color.font.tertiary};
	}
`;