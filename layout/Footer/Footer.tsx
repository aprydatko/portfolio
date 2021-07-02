import { FooterProps } from './Footer.props';
import { Head } from './Footer.styles';
import { format } from 'date-fns';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
	return (
		<Head>
			<footer {...props}>
				Footer
			</footer>
		</Head>
	);
};