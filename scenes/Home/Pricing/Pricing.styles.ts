import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 152px;
	padding-bottom: 309px;

	background-color: ${({ theme }) => theme.color.body.primary};
	background-image: url(/pricing-table-effect-one.svg);
	background-size: inherit;
	background-repeat: no-repeat;
	background-position: 100% 100%;

	& .pricing-h2 {
		text-align: center;
	}

	& .pricing-table > div {
		margin-top: 26px;
	}

	.prising-testimonials {
		margin-top: 160px;
		
		@media screen and (max-width: 960px) {
			margin-top: 60px;
		}
	}

	@media screen and (max-width: 960px) {
		padding-bottom: 200px;
		background-image: none;
	}
`;
