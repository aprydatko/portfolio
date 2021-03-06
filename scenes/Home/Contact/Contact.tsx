import React from "react";
import * as Scroll from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import { Htag } from "../../../components";
import { ContactBlock } from "./ContactBlock/ContactBlock";
import { GridContent } from "../../../styles/Grid";
import { Container } from "./Contact.styles";

export const Contact = (): JSX.Element => {
    const { t } = useTranslation();
    const Element = Scroll.Element;
    return (
        <Element name="contact" className="contact">
            <Container>
                <GridContent>
                    <Htag tag="h2">{t("home:contact.title")}</Htag>
                    <ContactBlock />
                </GridContent>
            </Container>
        </Element>
    );
};
