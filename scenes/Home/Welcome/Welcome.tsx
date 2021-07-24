import React from 'react';
import { Htag } from '../../../components/Htag/Htag';
import { Social } from '../../../components';
import { QuickInformation  } from '../../../components/QuickInformation/QuickInformation';
import { Header, Container, WelcomeWrap, WelcomeSubtitle, WelcomeInfo, WelcomeDescription } from './Welcome.styles';
import { Grid } from '../../../styles';
import GraphicMobile from '../../../assets/graphic-mobile.svg';

const data = [
	{
		id: 0,
		headline: 'Born in',
		text: 'Sumy'
	},
	{
		id: 1,
		headline: 'Expirience',
		text: '2+ Years'
	},
	{
		id: 2,
		headline: 'Date of Birth',
		text: '15 November 1990'
	}
];

export const Welcome = (): JSX.Element => {
	return (
		<Header>
      <Grid>
        {/* <GraphicMobile className="graphic-mobile" /> */}
        <Container>
          <WelcomeWrap>
            <WelcomeSubtitle>FRONT-END DEVELOPER</WelcomeSubtitle>
            <Htag tag="h1">ARTYR PRYDATKO</Htag>
          </WelcomeWrap>
          <WelcomeInfo>
            <WelcomeDescription>I'm a Front-End Developer based in Sumy. I love travelling, photography & music.</WelcomeDescription>
            <Social className="social" icons={['linkendin', 'gmail', 'github']} />
            <QuickInformation className="quick-information" data={data} />
          </WelcomeInfo>
        </Container>
      </Grid>
    </Header>
	);
};