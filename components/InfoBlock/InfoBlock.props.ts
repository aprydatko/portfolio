import { ReactChild } from 'react';

export interface InfoBlockProps {
	social?: Array<string>;
	page?: string;
	section?: string;
	children?: ReactChild;
	className?: string;
	openMenu?: boolean;
}