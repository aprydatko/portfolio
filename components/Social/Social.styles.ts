import styled from 'styled-components';

export const Container = styled.ul`
	margin: 0;
	padding: 0;

	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	list-style-type: none;
	z-index: 9999;
`;

export const Link = styled.a`

`;

export const Wrapper = styled.li`
	margin-right: 24px;
	line-height: 1;

	& svg {
		width: 19px;
		fill: ${({ theme }) => theme.color.font.primary};
	}

	& .linkendin {
		fill: ${({ theme }) => theme.color.main.black};
	}

	& .gmail {
		position: relative;
		top: -1px;
		fill: ${({ theme }) => theme.color.main.black};
	}

	& .github {
		position: relative;
		top: 1px;
		fill: ${({ theme }) => theme.color.main.black};
	}

	& .linkendin:hover {
		fill: #0077b5;
	}

	& .gmail:hover {
		fill: #F44336;
	}

	& .github:hover {
		fill: #5C6BC0;
	}
`;