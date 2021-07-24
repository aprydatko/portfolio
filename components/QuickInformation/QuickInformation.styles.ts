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

	&::after {
		content: '';
		position: absolute;
		top: -204px;
		right: 100px;
		width: 350px;
		height: 326px;

		background: url(/artur.png);
		background-size: contain;
		background-repeat: no-repeat;
		z-index: -1;

		@media only screen and (max-width: 1200px) {
			content: none;
		}
	}

	@media only screen and (max-width: 1200px) {
		& .graphic-icon {
			display: none;
		}
	}
`;

export const GraphicImg = styled.div`
	
`;