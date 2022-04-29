import React from "react";
import * as Scroll from "react-scroll";
import { useRouter } from "next/router";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { Htag } from "../../../../components";
import {
    AboutMeBlockSection,
    Container,
    MessageBlock,
    Wrapper,
} from "./AboutMeBlock.styles";

import { Successful } from "../Successful/Successful";
import { Button } from "../../../../components";
import Signature from "../../../../assets/icons/signature.svg";

export const AboutMeBlock = (): JSX.Element => {
    const Element = Scroll.Element;
    const { t } = useTranslation();
    const router = useRouter();
    const handleClick = () => {
        console.log("handleClick");
        router.push("/files/prydatko_artur.pdf");
    };
    return (
        <AboutMeBlockSection id="about">
            <Element name="about" className="about">
                <Htag tag="h2">{t("home:about.title")}</Htag>
            </Element>
            <Container>
                <Successful />
                <Wrapper>
                    <MessageBlock>
                        <Trans
                            i18nKey="home:about.description"
                            components={[<p></p>]}
                        />
                    </MessageBlock>
                    <Button
                        className="button-resume"
                        appearance="ghost"
                        size="middle"
                        onClick={handleClick}
                    >
                        {t("home:about.button")}
                    </Button>
                    <Signature className="signature-icon" />
                </Wrapper>
            </Container>
        </AboutMeBlockSection>
    );
};
