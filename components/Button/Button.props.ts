import { ReactNode } from 'react';

export interface ButtonProps {
	children: ReactNode;
	type?: string;
	appearance: 'primary' | 'ghost' | 'nostroke';
	size?: 'large' | 'middle' | 'small';
	className?: string;
}