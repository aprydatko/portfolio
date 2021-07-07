import styled from 'styled-components';

export const DescriptionWrap = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Description = styled.div`
	position: relative;

	// margin-top: 90px;
	padding-top: 34px;
	padding-bottom: 42px;
	padding-left: 55px;
	max-width: 620px;


	& p {
		margin: 22px 0;
		font-size: ${({ theme }) => theme.fontSize[1]};
		font-weight: 300;
		color: ${({ theme }) => theme.color.font.primary};
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 1px;
		height: 100%;
		background-color: ${({ theme }) => theme.color.font.primary};
`;