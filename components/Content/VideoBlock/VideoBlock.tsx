import React from "react";
import useTranslation from "next-translate/useTranslation";
import { GridContent } from "../../../styles/Grid";
import { Container, Wrapper } from "./VideoBlock.styles";
import { VideoBlockProps } from "./VideoBlock.props";
import PlayIcon from "../../../assets/icons/play.svg";

export const VideoBlock = ({ page, url }: VideoBlockProps): JSX.Element => {
    const { t, lang } = useTranslation();
    return (
        <Container>
            <Wrapper>
                <PlayIcon className="play-icon" />
            </Wrapper>
        </Container>
    );
};
