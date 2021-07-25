import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Htag } from '../../../components/Htag/Htag';
import { Social } from '../../../components';
import { QuickInformation  } from '../../../components/QuickInformation/QuickInformation';
import { Header, Container, WelcomeWrap, WelcomeSubtitle, WelcomeInfo, WelcomeDescription } from './Welcome.styles';
import { Grid } from '../../../styles';

export const Welcome = (): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Header>
      <Grid>
        {/* <GraphicMobile className="graphic-mobile" /> */}
        <Container>
          <WelcomeWrap>
            <WelcomeSubtitle>{t('home:welcome.subtitle')}</WelcomeSubtitle>
			<Htag tag="h1">{t('home:welcome.title')}</Htag>
          </WelcomeWrap>
          <WelcomeInfo>
            <WelcomeDescription>{t('home:welcome.description')}</WelcomeDescription>
            <Social className="social" icons={['linkendin', 'gmail', 'github']} />
            <QuickInformation 
              className="quick-information"
              section="welcome"
              subsection="quickInformation"
              count={3} 
            />
          </WelcomeInfo>
        </Container>
      </Grid>
    </Header>
	);
};