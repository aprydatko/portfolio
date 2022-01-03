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

	// width: 24px;
	// height: 25px;
	background: transparent;
	border: none;
	cursor: pointer;

	svg.dark-icon {
		transform: scale(.9);
		top: 0px;
		left: -1px;
	}

	svg.light-icon {
		transform: scale(.9);
		top: 0px;
		left: -1px;
	}

	svg {
		position: relative;
	}

	svg > path {
		fill: ${({ theme }) => theme.color.font.primary};
		transition: fill .3s ease-out;
	}

	&:hover {
		svg > path {
			fill: ${({ theme }) => theme.color.font.secondary};
			transition: fill .3s ease-out;
		}
	}
`;