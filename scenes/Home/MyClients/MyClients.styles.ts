import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 160px;
	padding-bottom: 100px;

	background-color: ${({ theme }) => theme.color.body.primary};
	// background-image: url(/pricing-table-effect-one.svg);
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
	}

	@media screen and (max-width: 960px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}
`;

export const Clients = styled.div`
	margin-top: 115px;
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 650px) {
		flex-wrap: wrap;
	}
`;

export const ClientItem = styled.div`
	transform: scale(.8);
`;

