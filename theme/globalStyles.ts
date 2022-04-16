import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	html, 
	body {
		margin: 0;
		padding: 0;	
	}

	ul, li {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	body {
		font-family: ${({ theme }) => theme.fontFamily.primary};
		font-size: ${({ theme }) => theme.fontSize["xs"]};
		line-height: ${({ theme }) => theme.lineHeight.body};

		color: ${({ theme }) => theme.color.font.primary};
		background: ${({ theme }) => theme.color.body.primary};
	}

	body.hidden {
		height: 100%;
		overflow: hidden;
		padding-right: 8px;
	}

  	&::-webkit-scrollbar {
 		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.color.body.primary};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.color.body.secondary};
		border-radius: 20px;
		border: 3px solid ${({ theme }) => theme.color.body.primary};
	}
`;
