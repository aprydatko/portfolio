import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Htag, QuickInformation, InfoBlock } from '../../../components';
import { Header, Container, WelcomeWrap, WelcomeSubtitle } from './Welcome.styles';
import { Grid } from '../../../styles';
import { WelcomeProps } from './Welcome.props';

export const Welcome = ({ openMenu }: WelcomeProps): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<Header>
      <Grid>
        <Container>
          <WelcomeWrap>
            <WelcomeSubtitle>{t('home:welcome.subtitle')}</WelcomeSubtitle>
            <Htag tag="h1">{t('home:welcome.title')}</Htag>
          </WelcomeWrap>
          {!openMenu && (
            <InfoBlock
              page="home"
              section="welcome"
              social={['linkendin', 'gmail', 'github']}
            >
              <QuickInformation 
                className="quick-information"
                section="welcome"
                subsection="quickInformation"
                count={3} 
              />
            </InfoBlock>
          )}
        </Container>
      </Grid>
    </Header>
	);
};