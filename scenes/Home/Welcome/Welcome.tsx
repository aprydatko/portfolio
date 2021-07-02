import React from 'react';
import { Htag } from '../../../components/Htag/Htag';
import { Social } from '../../../components';
import { Header, Container, Welcome, WelcomeSubtitle, WelcomeInfo, WelcomeDescription } from './Welcome.styles';

const WelcomeSection = (): JSX.Element => {
	return (
		<Header>
      <Container>
        <Welcome>
          <WelcomeSubtitle>UI UX DESIGNER</WelcomeSubtitle>
          <Htag tag="h1">ROBERT LONG</Htag>
        </Welcome>
        <WelcomeInfo>
          <WelcomeDescription>I'm a UI/UX Designer based in NewYork and enjoy playing with colors. I love travelling, photography & music.</WelcomeDescription>
          <Social icons={['linkendin', 'gmail', 'github']} />
        </WelcomeInfo>
      </Container>
    </Header>
	);
};

export default WelcomeSection;