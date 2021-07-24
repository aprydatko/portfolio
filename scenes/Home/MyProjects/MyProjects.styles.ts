import styled from 'styled-components';

export const Container = styled.div`
	padding-bottom: 160px;
	position: relative;
	background-color: ${({ theme }) => theme.color.body.secondary};
	background-image: url(/my-projects-effect-one.svg);
	background-size: inherit;
	background-repeat: no-repeat;
	background-position: 0 100%;
	
	@media screen and (max-width: 960px) {
		background-image: none;
		padding-bottom: 100px;
	}

	& .my-projects > div {
		margin-top: 75px;
	}

	& h2 {
		position: absolute;
    	top: -55px;
	}

	& .button-load {
		display: block;
		margin: 0 auto;
	}
`;

export const ButtonWrap = styled.div`
	// margin: 0 auto;
`;

export const Projects = styled.ul`
	margin-top: 60px;
	
`;

export const Project = styled.li`
	display: flex;		
	margin-bottom: 118px;

	@media only screen and (max-width: 960px) {
		flex-direction: column;
  	}
`;

export const ProjectDescriptionWrap = styled.div`
	padding-top: 84px;
    padding-left: 100px;

	@media only screen and (max-width: 960px) {
		padding-left: 0;
		width: 200px;
    	margin: 0 auto;
  	}
`;

export const ProjectImage = styled.div`
	width: 540px;
	height: 352px;
	background-color: #ded6cb;

	@media only screen and (max-width: 960px) {
		width: 100%;
		height: 450px;
  	}
`;

export const Year = styled.div`
	margin-top: 40px;
	font-size: ${({ theme }) => theme.fontSize[2]};
	line-height: 1;
	font-weight: bold;
	text-align: right;
}
`;

export const Position = styled.div`
		
`;

export const ProjectInfo = styled.div`
	margin-top: 10px;
	font-size: ${({ theme }) => theme.fontSize[1]};	
	line-height: 1;

	& p {
		max-width: 200px;
		margin-top: 5px;
		line-height: 1.7;
	}
`;