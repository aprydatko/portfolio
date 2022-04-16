import React from "react";
import useTranslation from "next-translate/useTranslation";
import { GridContent } from "../../../styles/Grid";
import {
    Container,
    Content,
    Wrapper,
    Block,
    Title,
    Description,
} from "./DobbleBlock.styles";
import { DobbleBlockProps } from "./DobbleBlock.props";

export const DobbleBlock = ({ page }: DobbleBlockProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Container>
            <GridContent>
                <Wrapper>
                    <Block className="first-block">
                        <Content>
                            <Description>
                                Morbi iaculis convallis arcu, nec maximus tellus
                                sodales in. Curabitur
                            </Description>
                            <Title>
                                Malesuda mmper curabitur nisi lobrotis
                                vestibulum.
                            </Title>
                        </Content>
                    </Block>
                    <Block className="second-block">
                        <Content>
                            <Description>
                                Morbi iaculis convallis arcu, nec maximus tellus
                                sodales in. Curabitur
                            </Description>
                            <Title>
                                Malesuda mmper curabitur nisi lobrotis
                                vestibulum.
                            </Title>
                        </Content>
                    </Block>
                </Wrapper>
            </GridContent>
        </Container>
    );
};
