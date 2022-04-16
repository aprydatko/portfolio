import React from "react";
import Trans from "next-translate/Trans";
import { HeadlineDescriptionProps } from "./HeadlineDescription.props";
import { Description, DescriptionWrap } from "./HeadlineDescription.styles";

export const HeadlineDescription = ({
    pageName,
    sectionName,
    className,
}: HeadlineDescriptionProps): JSX.Element => {
    return (
        <DescriptionWrap className={className}>
            <Description>
                <Trans
                    i18nKey={
                        sectionName
                            ? `${pageName}:${sectionName}.description`
                            : `${pageName}:description`
                    }
                    components={[<p></p>]}
                />
            </Description>
        </DescriptionWrap>
    );
};
