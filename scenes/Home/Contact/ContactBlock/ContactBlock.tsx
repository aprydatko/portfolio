import React from "react";
import useTranslation from "next-translate/useTranslation";
import { FormBlock } from "../Form/Form";
import {
    AboutMeBlockSection,
    Container,
    MessageBlock,
    Wrapper,
} from "./ContactBlock.styles";

import { InfoBlock } from "../InfoBlock/InfoBlock";

export const ContactBlock = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <AboutMeBlockSection>
            <Container>
                <InfoBlock />
                <Wrapper>
                    <MessageBlock>
                        <p>{t("home:contact.description")}</p>
                    </MessageBlock>
                    <FormBlock />
                </Wrapper>
            </Container>
        </AboutMeBlockSection>
    );
};
