import React from 'react';
import { Htag } from '../../../../components';
import { WorkHistoryProps, EducationProps, ExpertiseProps, ExperienceProps, AwardsProps } from './WorkHistory.props';
import { Container, Column, EducationDate, EducationWrapper, EducationPosition, EducationPlace, EducationContainer, ExpertiseContainer, ExpertiseWrapper, ExpertiseName, ExperienceContainer, ExperienceWrapper, ExperienceDate, ExperienceName, ExperiencePosition, ExperienceDescription, AwardsWrapper, AwardsDate, AwardsPosition, AwardsDescription, AwardsContainer } from './WorkHistory.styles';

const Education = ({ date, place, position }: EducationProps): JSX.Element => {
	return (
		<EducationWrapper>
			<EducationDate>{date}</EducationDate>
			<EducationPosition>{position}</EducationPosition>
			<EducationPlace>{place}</EducationPlace>
		</EducationWrapper>
	);
};

const Expertise = ({ expertiseName }: ExpertiseProps): JSX.Element => {
	return (
		<ExpertiseWrapper>
			<ExpertiseName>{expertiseName}</ExpertiseName>
		</ExpertiseWrapper>
	);
};

const Awards = ({ date, place, description }: AwardsProps): JSX.Element => {
	return (
		<AwardsWrapper>
			<AwardsDate>{date}</AwardsDate>
			<AwardsPosition>{place}</AwardsPosition>
			<AwardsDescription>{description}</AwardsDescription>
		</AwardsWrapper>
	);
};

const Experience = ({ date, name, position, description }: ExperienceProps): JSX.Element => {
	return (
		<ExperienceWrapper>
			<ExperienceDate>{date}</ExperienceDate>
			<ExperienceName>{name}</ExperienceName>
			<ExperiencePosition>{position}</ExperiencePosition>
			<ExperienceDescription>{description}</ExperienceDescription>
		</ExperienceWrapper>
	);
};

export const WorkHistory = ({ data }: WorkHistoryProps): JSX.Element => {
	return (
		<Container>
			<Column>
				<EducationContainer>
					<Htag tag="h3">Education</Htag>
					{data.education.map((el, index) => <Education key={index} {...el} /> )}
				</EducationContainer>
				<ExpertiseContainer>
					<Htag tag="h3">Expertise</Htag>
					{data.expertise.map((el, index) => <Expertise key={index} expertiseName={el} /> )}
				</ExpertiseContainer>
				<AwardsContainer>
					<Htag tag="h3">Awards</Htag>
					{data.awards.map((el, index) => <Awards key={index} {...el} /> )}
				</AwardsContainer>
			</Column>
			<Column>
				<ExperienceContainer>
					<Htag tag="h3">Experience</Htag>
					{data.expirience.map((el, index) => <Experience key={index} {...el} /> )}
				</ExperienceContainer>
			</Column>
		</Container>
	);
};