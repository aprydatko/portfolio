import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
	background: linear-gradient(to top, ${({ theme }) => theme.color.body.secondary} 0% 65%, ${({ theme }) => theme.color.body.primary} 65% 100%);
	z-index: 999;
	
	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		right: -80px;
		width: 300px;
		height: 350px;
		background-image: url(/pricing-table-effect-one.svg);
		background-size: inherit;
		background-repeat: no-repeat;
		background-position: 0% 100%;
	}

	& > div{
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		position: absolute;
		top: calc(68% - 115px);
		right: 15%;
		height: 200px;
	}
`;

export const HiddenMenu = styled.ul`
	position: relative;
	display: flex;
	flex-direction: column;

	max-width: 1250px;
	width: 100%;
	margin: 0 auto;
	padding: 0 16px;
	margin-left: 262px;

	& ul {
		position: absolute;
		bottom: 33px;
		left: -152px;
		// background: red;
		display: flex;
    	flex-direction: column;
		& > li {
			margin-right: 0;
			&  svg {
				width: 16px;
				height: 24px;
			}
			& .gmail {
				position: static;
				padding: 10px 0 6px 0;
			}
			& .gmail {
				position: static;
			}
			& .github {
				position: static;
			}
		}
	}
`;

export const ItemWrap = styled.li`
	& > a {
		font-family: ${({ theme }) => theme.fontFamily.secondary};
		font-size: 76px;
		line-height: 1.6;
		text-decoration: none;
		color: ${({ theme }) => theme.color.font.primary};
		&:hover {
			color: ${({ theme }) => theme.color.font.secondary};
		}
	}
`;