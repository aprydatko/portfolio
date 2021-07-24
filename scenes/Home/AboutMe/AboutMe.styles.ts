import styled from 'styled-components';

export const AboutMeSection = styled.div`
  position: relative;
  padding-top: 268px;
  padding-bottom: 155px;

  background-color: ${({ theme }) => theme.color.body.secondary};
  background-image: url(/about-us-effect-one.svg);
  background-size: inherit;
  background-repeat: no-repeat;
  background-position: 104% 100%;

  @media only screen and (max-width: 1200px) {
    padding-top: 0px;
    padding-bottom: 60px;
	background-image: none;
    & .quick-information {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GraphicContainer = styled.div`
	position: absolute;
	top: -191px;
	left: calc(50% - 394px);

	&::after {
		content: '';
		position: absolute;
		top: -204px;
		right: 100px;
		width: 350px;
		height: 326px;

		// background: url(/artur.png);
		background-size: contain;
		background-repeat: no-repeat;
		z-index: -1;

		@media only screen and (max-width: 1200px) {
			content: none;
		}
	}

	@media only screen and (max-width: 1200px) {
		& .graphic-icon {
			display: none;
		}
	}
`;

export const GraphicImg = styled.div`
	
`;
