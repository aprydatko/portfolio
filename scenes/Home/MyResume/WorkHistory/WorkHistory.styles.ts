import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 50px;

	position: relative;
	display: flex;	
	justify-content: space-between;

	 &::before {
		content: '';
		position: absolute;
		top: 80px;
		right: -360px;
		width: 200px;
		height: 200px;
		// background-image: url(/resume-effect-three.svg);
		background-size: inherit;
		background-repeat: no-repeat;
  	}

	@media only screen and (max-width: 960px) {
		justify-content: flex-start;
		flex-direction: column;
		margin-top: 0px;
	}
`;

export const Column = styled.div`
	width: 225px;

	@media only screen and (max-width: 960px) {
		margin-top: 30px;
		margin-right: 100px;
	}

	@media only screen and (max-width: 960px) {
		width: 100%;
	}
`;

export const EducationContainer = styled.div`
	& h3 {
		margin-bottom: 32px;
	}
`;

export const EducationWrapper = styled.div`
	margin-bottom: 35px;
`;

export const EducationDate = styled.div`
	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 300;
	text-transform: uppercase;
	line-height: 1;
`;

export const EducationPosition = styled.div`
	margin-top: 9px;
	margin-bottom: 8px;

	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 700;
	line-height: 1;
`;

export const EducationPlace = styled.div`
	font-size: 16px;
	font-weight: 300;
	line-height: 1;
`;

export const ExpertiseContainer = styled.div`
	margin-top: 70px;

	& h3 {
		margin-bottom: 32px;
	}

	@media screen and (max-width: 650px) {
		margin-top: 30px;
	}
`;

export const ExpertiseWrapper = styled.div`
	margin-bottom: 12px;
`;

export const ExpertiseName = styled.div`
	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 300;
	line-height: 1;
`;

export const ExperienceContainer = styled.div`
	& h3 {
		margin-bottom: 32px;
	}
`;

export const ExperienceWrapper = styled.div`
	margin-bottom: 32px;
`;

export const ExperienceDate = styled.div`
	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 300;
	line-height: 1;
`;

export const ExperienceName = styled.div`
	margin-top: 9px;
	margin-bottom: 8px;

	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 700;
	line-height: 1;
`;

export const ExperiencePosition = styled.div`
	font-size: 16px;
	font-weight: 300;
	line-height: 1;
`;

export const ExperienceDescription = styled.p`
	margin: 12px 0;

	font-size: 14px;
	font-weight: 300;
`;

export const AwardsContainer = styled.div`
	margin-top: 70px;	
	& h3 {
		margin-bottom: 32px;
	}
`;

export const AwardsWrapper = styled.div`
	margin-bottom: 32px;
`;

export const AwardsDate = styled.div`
	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 300;
	line-height: 1;
`;

export const AwardsPosition = styled.div`
	margin-top: 9px;
	margin-bottom: 8px;

	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: 700;
	line-height: 1;
`;

export const AwardsDescription = styled.p`
	margin: 7px 0;

	font-size: 14px;
	font-weight: 300;
`;