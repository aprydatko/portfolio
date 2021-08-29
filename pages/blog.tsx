import React from 'react';
import Head from 'next/head';
import { withLayout } from '../layout/Layout';
import { MyBlog } from '../scenes/Blog';

import { Autor, LetsTalk } from '../components';

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog by Artur Prydatko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <MyBlog />
        <Autor />
		    <LetsTalk />
      </>
    </div>
  );
}

export default withLayout(Home);