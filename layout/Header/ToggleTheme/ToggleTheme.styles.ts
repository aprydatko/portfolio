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
		top: ${({ state }) => state === 'light' ? '4px' : '4px'};
	}

	svg > path {
		fill: ${({ theme }) => theme.color.font.primary};
	}

	&:hover {
		svg > path {
			fill: ${({ theme }) => theme.color.font.secondary};
		}
	}
`;