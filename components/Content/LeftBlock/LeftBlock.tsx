import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
    ProjectInfo,
    InfoWrap,
    Title,
    YearValue,
    Value,
    List,
    Item,
} from "./LeftBlock.styles";
import json from "../../../locales/en/project_zorro.json";
import { LeftBlockProps } from "./LeftBlock.props";

export const LeftBlock = ({
    page,
    title,
    titleText,
    category,
    categoryText,
}: LeftBlockProps): JSX.Element => {
    const { t, lang } = useTranslation();
    return (
        <ProjectInfo>
            <InfoWrap>
                <Title>{t(`${page}:header.${title}`)}</Title>
                <YearValue>{t(`${page}:header.${titleText}`)}</YearValue>
            </InfoWrap>
            <InfoWrap>
                <Title>{t(`${page}:header.${category}`)}</Title>
                <Value>{t(`${page}:header.${categoryText}`)}</Value>
            </InfoWrap>
            {/* <List>
				{json.header.skills.map((_, index) => 
					<Item key={index}>{t(`${page}:header.skills.${index}`)}</Item>)}
			</List> */}
        </ProjectInfo>
    );
};
