import React from 'react';
import { GridContent } from '../../../styles';
import { Htag } from '../../../components';
import { HeadlineDescription } from '../../../components/HeadlineDescription/HeadlineDescription';
import { Container, Clients, ClientItem } from './MyClients.styles';

import ClientOne from '../../../assets/icons/clients/client-1.svg';
import ClientTwo from '../../../assets/icons/clients/client-2.svg';
import ClientThree from '../../../assets/icons/clients/client-3.svg';
import ClientFour from '../../../assets/icons/clients/client-4.svg';

const description = [
	'Suspendisse potenti. Sed egestas eros eu libero posuere ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.',
];

export const MyClients = (): JSX.Element => {
	return (
		<Container>
			<GridContent>
				<Htag tag="h2">My Clients</Htag>
				<HeadlineDescription className="pricing-table" data={description} />
				<Clients>
					<ClientItem><ClientOne /></ClientItem>
					<ClientItem><ClientTwo /></ClientItem>
					<ClientItem><ClientThree /></ClientItem>
					<ClientItem><ClientFour /></ClientItem>
				</Clients>
			</GridContent>
		</Container>
	);
};