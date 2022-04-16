import React from "react";
import useTranslation from "next-translate/useTranslation";

import Backpack from "../../../../assets/icons/backpack.svg";
import Smile from "../../../../assets/icons/smile.svg";
import Cup from "../../../../assets/icons/cup.svg";

import { Container, List, Item, Count, Text } from "./Successful.styles";

export const Successful = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Container>
            <List>
                <Item>
                    <Backpack />
                    <Count>16</Count>
                    <Text>{t("home:about.successProject")}</Text>
                </Item>
                <Item>
                    <Smile />
                    <Count>7</Count>
                    <Text>{t("home:about.happyClients")}</Text>
                </Item>
                <Item>
                    <Cup />
                    <Count>3</Count>
                    <Text>{t("home:about.awwardsWon")}</Text>
                </Item>
            </List>
        </Container>
    );
};
