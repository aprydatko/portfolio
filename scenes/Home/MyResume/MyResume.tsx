import React from "react";

import { MyResumeSection } from "./MyResume.styles";
import { GridContent } from "../../../styles";
import { MyResumeBlock } from "./MyResumeBlock/MyResume";

export const MyResume = (): JSX.Element => {
    return (
        <MyResumeSection>
            <GridContent>
                <MyResumeBlock />
            </GridContent>
        </MyResumeSection>
    );
};
