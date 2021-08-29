import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 120px;
	@media only screen and (max-width: 960px) {
		margin-top: 0;
		margin-bottom: 30px;
	}
`;

export const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;

	width: 120px;
	margin-right: 55px;

	@media only screen and (max-width: 960px) {
		position: relative;
		margin-right: 0px;
		margin-left: 170px;
		marign-bottom: 0;
		padding-top: 25px;
		padding-left: 40px;
		display: flex;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 1px;
			height: 100%;
			background-color: ${({ theme }) => theme.color.font.primary};
		}
	}

	@media only screen and (max-width: 650px) {
		margin-left: 0px;
	}
`;

export const Item = styled.li`
	margin-bottom: 40px;
	text-align: right;
	@media only screen and (max-width: 960px) {
		max-width: 100px;
		margin-right: 50px;
		margin-bottom: 8px;
		text-align: left;
	}
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