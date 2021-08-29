import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-right: 24px;
`;

export const Select = styled.div`
	// overflow: hidden;

	&:hover {
		// overflow: visible;
	}
`;

export const Item = styled.div`
	// margin-bottom: 16px;

	width: 30px;
	height: 20px;
	cursor: pointer;
	background: white;
	// overflow: hidden;

	& .ru-icon {
		width: 30px;
	}

	& svg > path {
		// font-size: 0px;
	}

	&:hover {
		// background: white;
	}
`;