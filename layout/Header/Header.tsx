import React from 'react';
// import { HeaderProps } from './Header.props';
import { Container, Head } from './Header.styles';
import Navigation from './Navigation/Navigation';

import { Grid } from '../../styles';

export const Header = ({ props }): JSX.Element => {
	return (
		<Head>
			<Grid>
				<Container>
					<Navigation {...props} props={props} />
				</Container>
			</Grid>
		</Head>
	);
};