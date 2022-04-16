import React from "react";
import { Container, Head } from "./Header.styles";
import Navigation from "./Navigation/Navigation";

import { Grid } from "../../styles";
import { HeaderProps } from "./Header.props";

export const Header = (props: HeaderProps): JSX.Element => {
    return (
        <Head>
            <Grid>
                <Container></Container>
                <Container>
                    <Navigation {...props} />
                </Container>
            </Grid>
        </Head>
    );
};
