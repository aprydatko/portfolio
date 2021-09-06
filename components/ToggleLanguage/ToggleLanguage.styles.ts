import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	margin-right: 24px;
	
`;

export const Select = styled.div`
	position: absolute;
	top: -9px;
	right: 0;
	overflow: hidden;
	z-index: 999;

	&:hover {
		// overflow: visible;
	}
`;

export const Item = styled.div`
	width: 24px;
	height: 20px;
	margin-bottom: 16px;

	cursor: pointer;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	&:hover {
		opacity: .75;
	}
`;