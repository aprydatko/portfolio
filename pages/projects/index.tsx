import React from 'react';
import Head from 'next/head';
import { withLayout } from '../../layout/Layout';
import { MyProjects } from '../../scenes/Projects';

import { LetsTalk } from '../../components';

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects by Artur Prydatko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
		<MyProjects />
		<LetsTalk />
      </>
    </div>
  );
}

export default withLayout(Home);