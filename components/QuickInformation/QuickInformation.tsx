import React from 'react';
import { QuickInformationProps } from './QuickInformation.props';
import { Container, Content, Header, ItemInformation } from './QuickInformation.styles';

export const QuickInformation = ({ data, className }: QuickInformationProps): JSX.Element => {
	return (
		<>
			<Container className={className}>
				{data && data.map(it => 
					<ItemInformation key={it.id}>
						<Header>{it.headline}</Header>
						<Content>{it.text}</Content>
					</ItemInformation>
					)}
			</Container>
		</>
	);
};