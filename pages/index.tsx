import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { withLayout } from '../layout/Layout';
import { 
  Welcome, 
  AboutMe, 
  MyResume, 
  MyProjects, 
  // Pricing, 
  // MyBlog, 
  // MyClients,
  Contact,
  Map 
} from '../scenes/Home';

import styled from 'styled-components';

const Wrapper = styled.div`

`;

function Home(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t('home:seo.title')}</title>
        <meta name="description" content={t('home:seo.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper id="main">
        <Welcome />
        <AboutMe />
        <MyResume />
        {/* <MyProjects /> */}
        {/* <Pricing /> */}
        {/* <MyBlog /> */}
        {/* <MyClients /> */}
        <Contact />
        <Map />
      </Wrapper>
    </div>
  );
}

export default withLayout(Home);