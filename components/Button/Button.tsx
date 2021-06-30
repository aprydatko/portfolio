import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ appearance, size, children }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
				[styles.large]: size == 'large',
				[styles.middle]: size == 'middle',
				[styles.small]: size == 'small',
			})}
		>
			{children}
		</button>
	);
};