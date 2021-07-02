import { createGlobalStyle } from 'styled-components';

const defaultTheme = {
	fontFamily: {
		primary: 'Rubik, sans-serif',
		secondary: 'Sorts Mill Goudy, serif',
	},
	fontSize: [
		'18px',
		'20px',
		'33px',
		'100px',
		'150px',
	],
	fontWeight: {
		body: 400,
		subHeading: 400,
		link: 400,
		bold: 700,
		heading: 700
	},
	lineHeight: {
		body: 1.5,
		heading: 1.4,
		subHeading: 1,
		code: 1.6
	}
};

const light = {
	color: {
		body: {
			primary: '#f7f5f2',
			secondary: '#ebe7e0',
			tertiary: '#ffffff',
		},
		main: {
			white: '#ffffff',
			black: '#1c2528',
			blue: '#172c70',
			orange: '#ff8059',
			sky: '#55beda',
			violet: '#b9d1e4',
			bronze: '#e4c4a8',			
		},
		font: {
			primary: '#1c2528',
			secondary: '#ff8059',
			tertiary: '#3c4649',
		}
	}
};

const dark = {
	color: {
		body: {
			primary: '#1f2631',
			secondary: '#222a36',
			tertiary: '#181e27',
		},
		main: {
			white: '#ffffff',
			black: '#1c2528',
			blue: '#676cdb',
			orange: '#ff8059',
			sky: '#3aafc9',
			violet: '#b9d1e4',
			bronze: '#ffd041',			
		},
		font: {
			primary: '#ffffff',
			secondary: '#ff8059',
			tertiary: '#91959b',
		}
	}
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };

declare module 'styled-components' {
	interface FontFamily {
		primary: string;
		secondary: string;
	}
	interface FontWeights {
		body: number;
		subHeading: number;
		link: number;
		bold: number;
		heading: number;
	}
	interface LineHeights {
		body: number;
		heading: number;
		subHeading: number;
		code: number;
	}
	interface ColorBody {
		primary: string;
		secondary: string;
		tertiary: string;
	}
	interface ColorMain {
		white: string;
		black: string;
		blue: string;
		orange: string;
		sky: string;
		violet: string;
		bronze: string;
	}
	interface ColorFont {
		primary: string;
		secondary: string;
		tertiary: string;
	}

	interface Colors {
		body: ColorBody;
		main: ColorMain;
		font: ColorFont;
	}

	export interface DefaultTheme {
		fontFamily: FontFamily;
		fontSize: Array<string>;
		fontWeight: FontWeights;
		lineHeight: LineHeights;
		color: Colors;
  }
}

export const GlobalStyles = createGlobalStyle`
 html, 
 body {
	margin: 0;
	padding: 0;	
 }

  body {
    font-family: ${({ theme }) => theme.fontFamily.primary};
	font-size: ${({ theme }) => theme.fontSize[2]};
	line-height: ${({ theme }) => theme.lineHeight.body};

	color: ${({ theme }) => theme.color.font.primary};
	background: ${({ theme }) => theme.color.body.primary};
  }
`;