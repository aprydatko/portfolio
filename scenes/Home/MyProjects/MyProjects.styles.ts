import styled from 'styled-components';

export const Container = styled.div`
	padding-bottom: 160px;
	position: relative;
	background-color: ${({ theme }) => theme.color.body.secondary};
	background-image: url(/my-projects-effect-one.svg);
	background-size: inherit;
	background-repeat: no-repeat;
	background-position: 0 100%;

	& h2 {
		position: absolute;
    	top: -55px;
	}

	& button-load {
		display: block;
	}
`;

export const ButtonWrap = styled.div`
	margin: 0 auto;
`;

export const DescriptionWrap = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Description = styled.div`
	position: relative;

	margin-top: 90px;
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

export const Projects = styled.ul`
	margin-top: 60px;
`;

export const Project = styled.li`
	display: flex;		
	margin-bottom: 118px;
`;

export const ProjectDescriptionWrap = styled.div`
	padding-top: 84px;
    padding-left: 100px;
`;

export const ProjectImage = styled.div`
	width: 540px;
	height: 352px;
	background-color: #ded6cb;
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