import React from 'react';
import { Htag } from '../Htag/Htag';
import { SkillsProps, PercentLineProps } from './Skills.props';
import { SkillLine, SkillCircle, SkillContainer, SkillsList, SkillName, SkillPercent, Badge, SkillWrapper, SkillNameWrapper, SkillListWrapper, SkillPercentWrapper } from './Skills.styles';

const getPercentLine = ({ percent, name }: PercentLineProps): JSX.Element => {
	const arr = [];

	for (let key = 0; key < 10; key++) {
		if (key <= percent - 1) {
			arr.push(1);
		} else {
			arr.push(0);
		}
	}

	return (
		<SkillLine>
			{arr.map((el, index) => 
				<SkillCircle
					className={`${el === 1 ? 'active' : ''}`}
					name={name}
					key={index} 
				/> 	
			)}		
		</SkillLine>
	);
};

export const Skills = ({ data }: SkillsProps): JSX.Element => {
	return (
		<SkillContainer>
			<Htag tag="h3">SKILLS</Htag>
			<SkillWrapper>
				<SkillNameWrapper>
					{data && data.map(({ id, name }) => 
						<SkillsList key={`name-${id}`}>
							<SkillName>{name}</SkillName>
						</SkillsList>
					)}
				</SkillNameWrapper>
				<SkillListWrapper>
					{data && data.map(({ id, name, percent }) => 
						<SkillsList key={`skill-${id}`}>
							<SkillPercent>{getPercentLine({percent, name})}</SkillPercent>
						</SkillsList>
					)}
				</SkillListWrapper>
				<SkillPercentWrapper>
					{data && data.map(({ id, name, percent }) => 
						<SkillsList key={`percent-${id}`}>
							<Badge name={name}>{percent * 10 + '%'}</Badge>
						</SkillsList>
					)}
				</SkillPercentWrapper>
			</SkillWrapper>
		</SkillContainer>
	);
};