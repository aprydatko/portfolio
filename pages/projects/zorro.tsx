import React from 'react';
import Head from 'next/head';
import { withLayout } from '../../layout/Layout';

import { LetsTalk } from '../../components';
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
        <ProjectTemplate
          year="2018"
          technology="Photoshop, Html, XD"
          skills={['UI UX Design', 'Development', 'Branding']}
          title="Zorro"
          screen="zorro-screen"
        >
          <p>Aliquam a sapien diam. Phasellus pulvinar tellus aliquam eleifend consectetur. Sed bibendum leo quis rutrum aliquetmorbi </p>
          <p>Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed. Quisque quis suscipit ipsum, at pellentesque velit. Duis a congue sem. </p>
          <p>In sed dolor ut ligula malesuada sollicitudin. Morbi iaculis convallis arcu, nec maximus tellus sodales in. Curabitur blandit enim at nisl lobortis, non pretium enim hendrer Cras iaculis, elit sit amet cursus consequat, tellus ligula egestas ante, eu vestibulum massa libero at purus. Suspendisse ac hendrerit magna. Nulla dignissim neque nunc, et malesuada massa semper id. Morbi eget justo ut dui auctor volutpat facilisis ac nequeam accumsan</p>
        </ProjectTemplate>
		    <LetsTalk />
      </>
    </div>
  );
}

export default withLayout(Zorro);