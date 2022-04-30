import React from "react";
import * as Scroll from "react-scroll";
import Trans from "next-translate/Trans";
import { Htag } from "../../../../components";
import useTranslation from "next-translate/useTranslation";
import {
    AboutMeBlockSection,
    Container,
    MessageBlock,
    Wrapper,
} from "./MyResume.styles";

import { Successful } from "../Successful/Successful";
import { Button, Skills } from "../../../../components";
import { WorkHistory } from "../WorkHistory/WorkHistory";

const skills = [
    {
        id: 0,
        name: "HTML",
        percent: 9,
    },
    {
        id: 1,
        name: "CSS",
        percent: 8,
    },
    {
        id: 2,
        name: "JavaScript",
        percent: 7,
    },
    {
        id: 3,
        name: "React/Redux",
        percent: 7,
    },
    {
        id: 4,
        name: "Typescript",
        percent: 5,
    },
    {
        id: 5,
        name: "Node/PHP",
        percent: 4,
    },
];

export const MyResumeBlock = (): JSX.Element => {
    const { t } = useTranslation();
    const Element = Scroll.Element;
    return (
        <AboutMeBlockSection>
            <Element name="resume" className="resume">
                <Htag tag="h2">{t("home:resume.title")}</Htag>
            </Element>
            <Container>
                <Successful />
                <Wrapper>
                    <MessageBlock>
                        <Trans
                            i18nKey="home:resume.resume"
                            components={[<p></p>]}
                        />
                    </MessageBlock>
                    <Skills data={skills} />
                    <WorkHistory />
                    <a
                        href="/files/prydatko_artur.pdf"
                        download="/files/prydatko_artur.pdf"
                    >
                        <Button
                            className="button-resume"
                            appearance="primary"
                            size="middle"
                        >
                            {t("home:resume.button")}
                        </Button>
                    </a>
                </Wrapper>
            </Container>
        </AboutMeBlockSection>
    );
};
