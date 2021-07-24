import styled from 'styled-components';
import { SkillCircleProps } from './Skills.props';

export const SkillContainer = styled.div`
	display: flex;
	flex-direction: column;

	& h3 {
		margin-top: 40px;
		margin-bottom: 30px;
	}
`;

export const SkillWrapper = styled.div`
	display: flex;
	// justify-content: space-between;
	@media only screen and (max-width: 960px) {
		justify-content: flex-start;
	}
`;

export const SkillNameWrapper = styled.div`
	margin-right: 30px;
`;

export const SkillListWrapper = styled.div`
	position: relative;
	top: 4px;
	margin-right: 100px;

	@media only screen and (max-width: 960px) {
		margin-right: 16px;
	}
`;

export const SkillPercentWrapper = styled.div`
	position: relative;
	// top: 4px;
`;

export const SkillsList = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const SkillName = styled.div`
	margin-bottom: 27px;
	font-size: ${({ theme }) => theme.fontSize[1]};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	line-height: 1;
	color: ${({ theme }) => theme.color.font.primary};
`;

export const SkillPercent = styled.div`
	margin-bottom: 31px;
`;

export const Badge = styled.div<SkillCircleProps>`
	padding: 3px 6px;
	margin-bottom: 26px;

	font-size: 15px;
	font-weight: bold;
	color: white;
	line-height: 1;

	border-radius: 10px;
	background-color: ${
		({ theme, name }) => 
			name === 'HTML' ? theme.color.main.blue :
			name === 'CSS' ? theme.color.main.orange :
			name === 'JavaScript' ? theme.color.main.sky :
			name === 'React/Redux' ? theme.color.main.violet :
			name === 'Typescript' ? theme.color.main.bronze :   
			name === 'Node/PHP' ? theme.color.main.black : ''  
		
	};
`;

export const SkillLine = styled.div`
	display: flex;
`;

export const SkillCircle = styled.div<SkillCircleProps>`
	margin-right: 16px;

	width: 16px;
	height: 16px;
	border-radius: 100%;
	background-color: ${({ theme }) => theme.color.body.secondary};

	&.active {
		background-color: ${
			({ theme, name }) => 
				name === 'HTML' ? theme.color.main.blue :
				name === 'CSS' ? theme.color.main.orange :
				name === 'JavaScript' ? theme.color.main.sky :
				name === 'React/Redux' ? theme.color.main.violet :
				name === 'Typescript' ? theme.color.main.bronze :   
				name === 'Node/PHP' ? theme.color.main.black : ''   
			
		};
	}
`;