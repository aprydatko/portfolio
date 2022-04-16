import React from "react";
import useTranslation from "next-translate/useTranslation";
import { QuickInformationProps } from "./QuickInformation.props";
import {
    Container,
    Content,
    Header,
    ItemInformation,
} from "./QuickInformation.styles";

export const QuickInformation = ({
    section,
    subsection,
    count,
    className,
}: QuickInformationProps): JSX.Element => {
    const { t } = useTranslation();
    const array = [];
    for (let i = 0; i < count; i++) {
        array.push(i);
    }
    return (
        <>
            <Container className={className}>
                {array.map((count) => (
                    <ItemInformation key={count}>
                        <Header>
                            {t(
                                `home:${section}.${subsection}.${count}.headline`
                            )}
                        </Header>
                        <Content>
                            {t(`home:${section}.${subsection}.${count}.text`)}
                        </Content>
                    </ItemInformation>
                ))}
            </Container>
        </>
    );
};
