import Head from 'next/head';
import React from 'react';
import { Htag, Button } from '../components';
import { withLayout } from '../layout/Layout';
import styled from 'styled-components';

import { Welcome, AboutMe } from '../scenes/Home';

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio by Artur Prydatko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Welcome />
        <AboutMe />
        {/* <Htag tag="h1">Full time</Htag> */}
        {/* <Button appearance="ghost" size="middle">View Resume</Button> */}
      </main>
    </div>
  );
}

export default withLayout(Home);