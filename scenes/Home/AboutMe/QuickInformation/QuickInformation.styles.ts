import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ItemInformation = styled.div`
	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 300;
	text-align: center;

	&:first-child {
		text-align: left;
	}

	&:last-child {
		text-align: right;
	}
`;

export const Header = styled.div`
	font-weight: 300
	line-height: 1;
`;

export const Content = styled.div`
	font-weight: 700;
	line-height: .8;
`;

export const GraphicContainer = styled.div`
	position: absolute;
	top: -191px;
	left: calc(50% - 394px);
`;