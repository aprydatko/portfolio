import React from "react";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import { GridContent } from "../../../styles/Grid";
import {
    Header,
    Content,
    Container,
    TimeRead,
    Time,
    Date,
} from "./Header.styles";
import { Htag, LeftBlock } from "../../../components";
import { BlockProps, WrapperProps } from "./Header.props";

export const HeaderBlog = ({
    page,
    leftBlock,
    title,
    description,
    tag,
    firstBold,
    className,
    titleBlock,
    titleTextBlock,
    categoryBlock,
    categoryTextBlock,
}: BlockProps): JSX.Element => {
    const { t } = useTranslation();
    const Wrapper = ({ children }: WrapperProps) =>
        leftBlock ? <Header>{children}</Header> : <>{children}</>;
    return (
        <Container
            className={`${tag !== "h2" ? "title" : "header"} ${className}`}
        >
            <GridContent>
                <Wrapper>
                    <Content
                        className={`${tag !== "h2" ? "title" : "header"} ${
                            firstBold ? "first-bold" : ""
                        }`}
                    >
                        <TimeRead>
                            <Time>8 Mins Read</Time>
                            <Date>15 May 2021</Date>
                        </TimeRead>
                        <Htag className="block" tag={tag}>
                            {t(`${page}:${title}`)}
                        </Htag>
                        <Trans
                            i18nKey={`${page}:${description}`}
                            components={[<p></p>]}
                        />
                    </Content>
                    {leftBlock && (
                        <LeftBlock
                            page={page}
                            title={titleBlock}
                            titleText={titleTextBlock}
                            category={categoryBlock}
                            categoryText={categoryTextBlock}
                        />
                    )}
                </Wrapper>
            </GridContent>
        </Container>
    );
};
