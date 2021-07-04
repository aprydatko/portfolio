import { HtagProps } from './Htag.props';
import { H1, H2 } from './Htag.style';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
	switch(tag) {
		case 'h1':
			return <H1>{children}</H1>;
		case 'h2':
			return <H2>{children}</H2>;
		case 'h3': 
			return <h3>{children}</h3>;
		case 'h4': 
			return <h4>{children}</h4>;
		case 'h5': 
			return <h5>{children}</h5>;
		default:
			return <></>;
	}
};