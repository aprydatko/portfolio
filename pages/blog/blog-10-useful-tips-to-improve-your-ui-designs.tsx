import React from 'react';
import Head from 'next/head';
import { withLayout } from '../../layout/Layout';
import useTranslation from 'next-translate/useTranslation';

import { Block, LetsTalk, ListBlock, PresentationBlock, Slider, Social, Tags } from '../../components';
import { BlogTemplate } from '../../templates';

function Zorro(): JSX.Element {
  const { t, lang } = useTranslation();
  const page = 'blog-10-useful-tips-to-improve-your-ui-designs';
  return (
    <div>
      <Head>
        <title>{t(`${page}:title`)}</title>
        <meta name="description" content="10 Useful" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <BlogTemplate page={page}>
          <Block 
            tag="h3"
            page={page}
            title="body.block1.title"
            description="body.block1.description"
            leftBlock={false}
            bold={true}
          />
          <ListBlock page={page} />
          <Block 
            tag="h3"
            page={page}
            title="body.block2.title"
            description="body.block2.description"
            leftBlock={false}
            bold={false}
          />
          <PresentationBlock 
            page={page}
          />
           <Block 
            tag="h3"
            page={page}
            title="body.block2.title"
            description="body.block2.description"
            leftBlock={false}
            bold={false}
          />
          <Slider  page={page} />
          <Block 
            tag="h3"
            page={page}
            title="body.block3.title"
            description="body.block3.description"
            leftBlock={false}
            bold={false}
          />
          <Tags page={page} />
          <LetsTalk />
      </BlogTemplate>
      </>
    </div>
  );
}

export default withLayout(Zorro);