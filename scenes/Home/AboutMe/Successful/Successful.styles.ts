import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 120px;
`;

export const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;

	width: 120px;
	margin-right: 55px;

	& li:last-child {
		margin-bottom: 0;
	}
`;

export const Item = styled.li`
	margin-bottom: 40px;
	text-align: right;
`;

export const Count = styled.div`
	font-size: ${({ theme }) => theme.fontSize[2]};
	line-height: 1;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Text = styled.div`
	font-size: ${({ theme }) => theme.fontSize[1]};
	line-height: 1.3;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;