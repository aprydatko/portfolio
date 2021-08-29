import React from 'react';
import Head from 'next/head';
import { withLayout } from '../layout/Layout';
import { 
  Welcome, 
  AboutMe, 
  MyResume, 
  MyProjects, 
  Pricing, 
  MyBlog, 
  MyClients,
  Contact,
  Map 
} from '../scenes/Home';

import { MobileMenu } from '../components';

import styled from 'styled-components';

const Wrapper = styled.div`

`;

function Home(props): JSX.Element {
  return (
    <div>
      <MobileMenu props={props} />
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
        <MyBlog />
        <MyClients />
        <Contact />
        <Map />
      </Wrapper>
    </div>
  );
}

export default withLayout(Home);