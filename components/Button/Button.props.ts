import { ReactNode } from 'react';

export interface ButtonProps {
	children: ReactNode;
	appearance: 'primary' | 'ghost';
	size?: 'large' | 'middle' | 'small';
	className?: string;
}