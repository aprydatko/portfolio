import React from "react";
import MailIcon from "../../assets/icons/email.svg";
import { Wrapper, Content, Headline, IconWrap } from "./Alertstyles";

export const Alert = ({ message }: { message: string }): JSX.Element => {
    return (
        <Wrapper>
            <IconWrap>
                <MailIcon />
            </IconWrap>
            <Content>
                <Headline>{message}</Headline>
            </Content>
        </Wrapper>
    );
};
