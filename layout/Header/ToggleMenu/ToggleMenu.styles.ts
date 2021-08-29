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
		top: ${({ state }) => state === 'open' ? '7px' : '11px'};
	}

	svg > path {
		stroke: ${({ theme }) => theme.color.font.primary};
	}

	&:hover {
		svg > path {
			stroke: ${({ theme }) => theme.color.font.secondary};
		}
	}
`;