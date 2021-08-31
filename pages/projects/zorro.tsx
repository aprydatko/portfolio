import React from 'react';
// import useTranslation from 'next-translate/useTranslation';
// import Trans from 'next-translate/Trans';
import Head from 'next/head';
import { withLayout } from '../../layout/Layout';

import { Block, LetsTalk } from '../../components';
import { ProjectTemplate } from '../../templates';

function Zorro(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Zorro</title>
        <meta name="description" content="Zorro project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <ProjectTemplate page="project_zorro">
          <Block 
            tag="h3"
            page="project_zorro"
            title="body.problem.title"
            description="body.problem.description"
            leftBlock={false}
          />
          <Block 
            tag="h3"
            page="project_zorro"
            title="body.projectGoal.title"
            description="body.projectGoal.description"
            leftBlock={false}
            firstBold={true}
          />
        </ProjectTemplate>
		    <LetsTalk />
      </>
    </div>
  );
}

export default withLayout(Zorro);