import styled from 'styled-components';

export const Head = styled.header`
	margin-top: 90px;
	background: ${({ theme }) => theme.color.body.primary};
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 1510px;
	margin: 0 auto;
	// padding: 0 16px;
`;