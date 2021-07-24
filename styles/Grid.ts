import styled from 'styled-components';

export const Grid = styled.div`
	padding: 0 16px;
	max-width: 1250px;
	margin: 0 auto;
	box-sizing: border-box;

	@media only screen and (max-width: 1200px) {
		padding: 0 24px;
	}
`;

export const GridContent = styled.div`
	padding: 0 16px;
	max-width: 978px;
	margin: 0 auto;
	box-sizing: border-box;

	@media only screen and (max-width: 1200px) {
		max-width: 100%;
		padding: 0 24px;
	}
`;