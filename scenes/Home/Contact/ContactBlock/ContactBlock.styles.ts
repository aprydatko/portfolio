import styled from 'styled-components';

export const AboutMeBlockSection = styled.div`
	padding-top: 90px;
`;

export const Container = styled.div`
	margin: 0 auto;
	// padding-top: 60px;

	display: flex;
	// justify-content: flex-end;
`;

export const Wrapper = styled.div`
	max-width: 405px;

	display: flex;
	flex-direction: column;

	position: relative;
	padding-left: 55px;
	padding-top: 33px;
	padding-bottom: 50px;

	& .button-resume {
		margin-top: 48px;
	}

	& .signature-icon {
		margin-top: 33px;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 1px;
		height: 72%;
		background-color: ${({ theme }) => theme.color.font.primary};
	}
`;

export const MessageBlock = styled.div`
	& > p:first-child {
		font-weight: 400;
	}

	& > p {
		font-size: ${({ theme }) => theme.fontSize[1]};
		line-height: ${({ theme }) => theme.lineHeight.body};
		font-weight: 300;
		margin: 22px 0;
	}
`;