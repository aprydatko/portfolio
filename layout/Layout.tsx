import React, { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Container } from './Layout.styles';

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
	return (
		<Container>
			<Header {...props} />
			<div>
				{children}
			</div>
			<Footer />
		</Container>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout {...props}>
				<Component {...props} />
			</Layout>
		);
	};
};

interface HomeProps {
	theme: string;
	toggleTheme: (theme: string) => string;
}