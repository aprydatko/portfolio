import React from 'react';
// import { HeaderProps } from './Header.props';
import { Container, Head } from './Header.styles';
import Navigation from './Navigation/Navigation';

export const Header = ({ ...props }): JSX.Element => {
	return (
		<Head>
			<Container>
				<Navigation {...props} />
			</Container>
		</Head>
	);
};