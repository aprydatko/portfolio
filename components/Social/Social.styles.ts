import styled from "styled-components";

export const Container = styled.ul`
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    list-style-type: none;
    z-index: 9999;
`;

export const Link = styled.a``;

export const Wrapper = styled.li`
	line-height: 1;

	&:nth-child(1) {
		padding-left: 0px;
	}

	&:last-child {
		padding-right: 0px;
	}

	 & svg {
		fill: ${({ theme }) => theme.color.icon.primary};
		& > path {
			fill: ${({ theme }) => theme.color.icon.primary};
		}
	}

	& .linkendin:hover {
		& > path {
			fill: #0e76a8;
		}
		transition 225ms;
	}

	& .gmail:hover {
		fill: #F44336;
		transition 225ms;
	}

	& .github:hover {
		fill: #5C6BC0;
		& > path {
			fill: #5C6BC0;
		}
		transition 225ms;
	}
`;
