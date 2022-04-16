import React from "react";
import { Htag } from "../../../../components";
import useTranslation from "next-translate/useTranslation";
import {
    WorkHistoryProps,
    EducationProps,
    ExpertiseProps,
    ExperienceProps,
    AwardsProps,
} from "./WorkHistory.props";
import {
    Container,
    Column,
    EducationDate,
    EducationWrapper,
    EducationPosition,
    EducationPlace,
    EducationContainer,
    ExpertiseContainer,
    ExpertiseWrapper,
    ExpertiseName,
    ExperienceContainer,
    ExperienceWrapper,
    ExperienceDate,
    ExperienceName,
    ExperiencePosition,
    ExperienceDescription,
    AwardsWrapper,
    AwardsDate,
    AwardsPosition,
    AwardsDescription,
    AwardsContainer,
} from "./WorkHistory.styles";

const Education = ({ t }: EducationProps): JSX.Element => {
    return (
        <EducationWrapper>
            <EducationDate>{t("home:resume.education.date")}</EducationDate>
            <EducationPosition>
                {t("home:resume.education.rank")}
            </EducationPosition>
            <EducationPlace>
                {t("home:resume.education.university")}
            </EducationPlace>
        </EducationWrapper>
    );
};

const Expertise = ({ index, t }: ExpertiseProps): JSX.Element => {
    return (
        <ExpertiseWrapper>
            <ExpertiseName>{t(`home:resume.expertise.${index}`)}</ExpertiseName>
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

const Experience = ({ index, t }: ExperienceProps): JSX.Element => {
    return (
        <ExperienceWrapper>
            <ExperienceDate>
                {t(`home:resume.experience.${index}.date`)}
            </ExperienceDate>
            <ExperienceName>
                {t(`home:resume.experience.${index}.company`)}
            </ExperienceName>
            <ExperiencePosition>
                {t(`home:resume.experience.${index}.position`)}
            </ExperiencePosition>
            <ExperienceDescription>
                {t(`home:resume.experience.${index}.description`)}
            </ExperienceDescription>
        </ExperienceWrapper>
    );
};

export const WorkHistory = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Container>
            <Column>
                <EducationContainer>
                    <Htag tag="h3">{t("home:resume.education.title")}</Htag>
                    <Education t={t} />
                </EducationContainer>
                <ExpertiseContainer>
                    <Htag tag="h3">{t("home:resume.expertise.title")}</Htag>
                    {[0, 1, 2, 3].map((index) => (
                        <Expertise key={index} index={index} t={t} />
                    ))}
                </ExpertiseContainer>
                {/* <AwardsContainer>
					<Htag tag="h3">Awards</Htag>
					{data.awards.map((el, index) => <Awards key={index} {...el} /> )}
				</AwardsContainer> */}
            </Column>
            <Column>
                <ExperienceContainer>
                    <Htag tag="h3">{t("home:resume.experience.title")}</Htag>
                    {[0, 1].map((el, index) => (
                        <Experience key={index} index={index} t={t} />
                    ))}
                </ExperienceContainer>
            </Column>
        </Container>
    );
};
