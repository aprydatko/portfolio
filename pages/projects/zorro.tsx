import React from 'react';
import Head from 'next/head';
import { withLayout } from '../../layout/Layout';

import { Block, LetsTalk, ImageBlock, VideoBlock, PerformanceBlock, DobbleBlock, Technology } from '../../components';
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
          <ImageBlock page="project_zorro" images={[1, 2]} />
          <Block 
            tag="h3"
            page="project_zorro"
            title="body.solution.title"
            description="body.solution.description"
            leftBlock={false}
            firstBold={true}
          />
          <VideoBlock page="project_zorro" url="home_video" />
          <PerformanceBlock page="project_zorro" />
          <Block 
            tag="h3"
            page="project_zorro"
            title="body.result.title"
            description="body.result.description"
            leftBlock={false}
            firstBold={true}
          />
          <DobbleBlock page="project_zorro" />
          <Technology page="project_zorro" technology={[0, 1, 2]} skills={[0, 1, 2, 3, 4]} />
        </ProjectTemplate>
		    <LetsTalk />
      </>
    </div>
  );
}

export default withLayout(Zorro);