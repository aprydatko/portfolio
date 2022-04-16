import React from "react";
import { Grid } from "../../styles";
import { Social } from "../../components";
import {
    Wrapper,
    Avatar,
    Content,
    Name,
    Position,
    SocialWrap,
} from "./Autor.styles";

export const Autor = (): JSX.Element => {
    return (
        <Wrapper>
            <Grid>
                <Avatar />
                <Content>
                    <Name>Robert Long</Name>
                    <Position>UI UX Designer</Position>
                    <SocialWrap>
                        <Social
                            className="social"
                            icons={["linkendin", "gmail", "github"]}
                        />
                    </SocialWrap>
                </Content>
            </Grid>
        </Wrapper>
    );
};
