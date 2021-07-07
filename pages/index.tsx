import Head from 'next/head';
import React from 'react';
import { withLayout } from '../layout/Layout';
import { Welcome, AboutMe, MyResume, MyProjects, Pricing } from '../scenes/Home';

import styled from 'styled-components';

const Wrapper = styled.div`

`;

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio by Artur Prydatko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Welcome />
        <AboutMe />
        <MyResume />
        <MyProjects />
        <Pricing />
      </Wrapper>
    </div>
  );
}

export default withLayout(Home);