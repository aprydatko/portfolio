import { ReactNode } from 'react';

export interface BlockProps {
	tag: "h1" | "h2" | "h3" | "h4" | "h5";
	page: string;
	title: string;
	className?: string;
	description: string;
	firstBold?: boolean;
	bold?: boolean;
	leftBlock?: boolean;
}

export interface WrapperProps {
	children?: ReactNode;
}