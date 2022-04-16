import React from "react";
import useTranslation from "next-translate/useTranslation";
import { GridContent } from "../../../styles/Grid";
import { Container, Wrapper, Content } from "./PresentationBlock.styles";
import { ReviewsProps } from "./PresentationBlock.props";

// import Quotes from '../../../assets/icons/quotes.svg';
import { Htag } from "../../Htag/Htag";

export const PresentationBlock = ({
    page,
    className,
}: ReviewsProps): JSX.Element => {
    const { t, lang } = useTranslation();
    return (
        <Container className={className}>
            <GridContent>
                <Wrapper>
                    <Content>
                        <Htag tag="h3">Phasellus pulvinar leo.</Htag>
                        <p>
                            Erdiet risus at tortor consequat maximus et eget
                            magna. Cras ornare sagittis augue, id sollicitudin
                            justo tristique ut. Nullam ex enim, euismod vel
                            bibendum ultrices, fringilm, euismod vel bibendum
                            ultrices, fringilla vel eros at pell entesque velit.
                            Duis a congue sem.{" "}
                        </p>
                        <p>
                            Donec euismod leo lectus, et euismod metus euismod
                            sed. Quisque quis suscipit ipsum
                        </p>
                    </Content>
                </Wrapper>
            </GridContent>
        </Container>
    );
};
