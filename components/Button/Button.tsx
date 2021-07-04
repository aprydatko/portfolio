import { ButtonProps } from './Button.props';
import { ButtonWrap } from './Button.styles';

export const Button = ({ appearance, size, children, className }: ButtonProps): JSX.Element => {
	return (
		<ButtonWrap
			className={`
				${appearance === 'primary' ? 'primary' : 'ghost'}
				${size === 'large' ? 'large' : size === 'middle' ? 'middle' : 'small'}
				${className}
			`}
		>
			{children}
		</ButtonWrap>
	);
};