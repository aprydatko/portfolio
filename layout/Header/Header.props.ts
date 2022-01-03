import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
	theme?: String;
	toggleTheme?: () => any;
	openMenu?: Boolean;
	toggleMenu?: () => any;
}
