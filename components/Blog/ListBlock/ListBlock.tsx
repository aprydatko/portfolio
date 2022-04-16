import React from "react";
import useTranslation from "next-translate/useTranslation";
import { GridContent } from "../../../styles/Grid";
import { Container, Wrapper, Paragraph, WrapList } from "./ListBlock.styles";
import { BlockProps } from "./ListBlock.props";
import { Reviews } from "../..";

export const ListBlock = ({ page }: BlockProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Container>
            <GridContent>
                <WrapList>
                    <Wrapper>
                        {[0, 1, 2].map((item) => (
                            <Paragraph key={item}>
                                {t(`${page}:body.listBlock.${item}`)}
                            </Paragraph>
                        ))}
                    </Wrapper>
                    <Reviews page={page} />
                </WrapList>
            </GridContent>
        </Container>
    );
};
