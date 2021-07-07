import styled from 'styled-components';

export const TableWrap = styled.div`
	margin-top: 90px;

	display: flex;
	justify-content: space-between;
`;

export const TableItem = styled.div`
	padding: 38px 16px;

	width: 266px;
	background-color: ${({ theme }) => theme.color.body.secondary};
	text-align: center;

	border-radius: 10px;
	box-sizing: border-box;

	& .button-full-time {
		width: 175px;
    	margin-top: 41px;
	}
`;

export const TableName = styled.div`
	font-size: ${({ theme }) => theme.fontSize[1]};
	line-height: 1;
	font-weight: bold;
`;

export const TableHeadline = styled.div`
	margin-top: 10px;

	font-size: 14px;
	line-height: 1;
	font-weight: 300;
`;

export const TablePrice = styled.div`
	margin: 47px 0;

	font-size: ${({ theme }) => theme.fontSize[2]};
	line-height: 1;
	font-weight: bold;
`;

export const WorksList = styled.ul`
	
`;

export const Direction = styled.li`
	font-size: ${({ theme }) => theme.fontSize[1]};
	line-height: 1.5;
	font-weight: 300;
`;