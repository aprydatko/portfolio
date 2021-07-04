import React from 'react';
import { QuickInformationProps } from './QuickInformation.props';
import { GraphicContainer, Container, Content, Header, ItemInformation } from './QuickInformation.styles';
import GraphicIcon from '../../../../assets/graphic.svg';

export const QuickInformation = ({ data }: QuickInformationProps): JSX.Element => {
	return (
		<>
			<GraphicContainer>
				<GraphicIcon className="graphic-icon" />
			</GraphicContainer>
			<Container>
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