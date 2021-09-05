import styled from 'styled-components';

export const Container = styled.div`
	& .block {
		text-transform: none;
	}

	&.header {
		padding-top: 0px;
	}

	&.title {
		// padding-top: 40px;
	}
`;

export const Header = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
`;

export const Content = styled.div`
	font-family: ${({ theme }) => theme.fontFamily.primary};
	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 300;
	color: ${({ theme }) => theme.color.font.primary};

	&.first-bold > p:nth-child(3n) {
		font-weight: 400;
	}

	&.first-bold > p:nth-child(4n) {
		font-weight: 400;
	}

	&.header {
		// padding-top: 40px;
	}

	&.title {
		// padding-top: 20px;
	}
`;

export const TimeRead = styled.div`
	position: absolute;
	top: -120px;
	left: 0;
`;

export const Time = styled.div`
	font-family: ${({ theme }) => theme.fontFamily.primary};
	font-size: 25px;
	font-weight: 700;
`;

export const Date = styled.div`
	font-family: ${({ theme }) => theme.fontFamily.primary};
	font-size: ${({ theme }) => theme.fontSize[0]};
	font-weight: 300;
`;