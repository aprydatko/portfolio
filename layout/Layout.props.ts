import { ReactNode } from 'react';

export interface LayoutProps {
	children: ReactNode;
	theme?: String;
	toggleTheme?: () => any;
	openMenu?: boolean;
	toggleMenu?: () => any;
}