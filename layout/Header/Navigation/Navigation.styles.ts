import styled from 'styled-components';

export const MenuBlock = styled.div`
	position: relative;
	display: flex;
`;

export const ThemeBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Email = styled.a`
	margin-left: 150px;

	font-size: ${({ theme }) => theme.fontSize[0]};
	font-weight: 300;
	line-height: 30px;

	color: ${({ theme }) => theme.color.font.primary};
	text-decoration: none;

	&:hover {
		color: ${({ theme }) => theme.color.font.secondary};
	}
`;

export const HiddenMenu = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;