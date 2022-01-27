import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 126px;

	@media screen and (max-width: 1200px) {
		margin-top: 0px;
	}
`;

export const List = styled.ul`
	position: relative;
	margin: 0;
	padding: 0;
	list-style-type: none;

	width: 218px;
	margin-right: 55px;

	& li:last-child {
		margin-bottom: 0;
	}

	@media screen and (max-width: 1200px) {
		width: auto;
		padding-top: 34px;
		padding-bottom: 8px;
		margin-left: 170px;

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
		margin-left: 35px;
		padding-bottom: 34px;
	}
`;

export const Item = styled.li`
	margin-bottom: 40px;
	text-align: right;

	@media screen and (max-width: 1200px) {
		// margin-bottom: 0px;
		padding-left: 40px;
		text-align: left;
	}

	@media screen and (max-width: 960px) {
		margin-bottom: 16px;
		padding-left: 30px;
		text-align: left;
	}
`;

export const Text = styled.div`
	font-size: ${({ theme }) => theme.fontSize[0]};
	line-height: 1.3;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;