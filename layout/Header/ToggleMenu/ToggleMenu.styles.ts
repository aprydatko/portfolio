import styled from 'styled-components';

interface Props {
  state: string;
}

export const Button = styled.button<Props>`
	padding: 0;
	margin: 0;

	display: flex;
	justify-content: center;
	aligh-items: center;

	width: 30px;
	height: 30px;
	background: transparent;
	border: none;
	cursor: pointer;

	svg {
		position: relative;
		top: ${({ state }) => state === 'open' ? '10px' : '6px'};
	}

	svg > path {
		stroke: ${({ theme }) => theme.color.main.black};
		fill: ${({ theme }) => theme.color.main.black};
	}

	&:hover {
		svg > path {
			stroke: ${({ theme }) => theme.color.font.secondary};
			fill: ${({ theme }) => theme.color.font.secondary};
		}
	}
`;