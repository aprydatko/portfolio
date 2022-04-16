import React from "react";
import useTranslation from "next-translate/useTranslation";

import Phone from "../../../../assets/icons/phone.svg";
import Email from "../../../../assets/icons/email.svg";
import Map from "../../../../assets/icons/map.svg";

import { Container, List, Item, Text } from "./InfoBlock.styles";

export const InfoBlock = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Container>
            <List>
                <Item>
                    <Phone />
                    <Text>{t("home:contact.phone.icon")}</Text>
                </Item>
                <Item>
                    <Email />
                    <Text>{t("home:contact.email.icon")}</Text>
                </Item>
                <Item>
                    <Map />
                    <Text>{t("home:contact.message.icon")}</Text>
                </Item>
            </List>
        </Container>
    );
};
