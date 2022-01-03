import styled from 'styled-components';
import { motion } from "framer-motion/dist/framer-motion"

interface Props {
  state: string;
}

export const Button = styled(motion.button)<Props>`
	position: relative;
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
	transition: .5s;

	svg {
		position: relative;
		transform: scale(1);
		top: ${({ state }) => state === 'open' ? '7px' : '11px'};
		transition: .3s;
	}

	svg > path {
		stroke: ${({ theme }) => theme.color.font.primary};
		// transition: .5s;
	}

	&::before {
		position: absolute;
		top: calc(50% - 25px);
		left: calc(50% - 25px);
		content: '';
		width: 50px;
		height: 50px;
		background: ${({ theme }) => theme.color.body.secondary};
		border-radius: 50px;
		opacity: 0;
		transition: 225ms;
	}

	&:hover {
		position: relative;

		&::before {
			opacity: 1;
			transition: 225ms;
		}

		svg {
			transform: scale(1.15);
			transition: 225ms;
		}

		svg > path {
			stroke: ${({ theme }) => theme.color.font.secondary};
			fill: ${({ theme }) => theme.color.font.secondary};
			transition: .5s;
		}
	}
`;