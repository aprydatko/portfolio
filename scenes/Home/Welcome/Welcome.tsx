import React from 'react';
import { Htag } from '../../../components/Htag/Htag';
import { Social } from '../../../components';
import { Header, Container, WelcomeWrap, WelcomeSubtitle, WelcomeInfo, WelcomeDescription } from './Welcome.styles';
import { Grid } from '../../../styles';

export const Welcome = (): JSX.Element => {
	return (
		<Header>
      <Grid>
        <Container>
          <WelcomeWrap>
            <WelcomeSubtitle>UI UX DESIGNER</WelcomeSubtitle>
            <Htag tag="h1">ROBERT LONG</Htag>
          </WelcomeWrap>
          <WelcomeInfo>
            <WelcomeDescription>I'm a UI/UX Designer based in NewYork and enjoy playing with colors. I love travelling, photography & music.</WelcomeDescription>
            <Social icons={['linkendin', 'gmail', 'github']} />
          </WelcomeInfo>
        </Container>
      </Grid>
    </Header>
	);
};