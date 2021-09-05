import styled from 'styled-components';

export const Container = styled.div`
	margin: 40px 0;
`;

export const Wrapper = styled.ul`
	max-width: 1920px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: space-between;
`;

export const Item = styled.li`
	margin-right: 30px;
	height: 490px;

	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	&:last-child {
		margin-right: 0px;
	}
`;