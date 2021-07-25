import React from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Htag } from '../../../../components';
import { AboutMeBlockSection, Container, MessageBlock, Wrapper } from './AboutMeBlock.styles';

import { Successful } from '../Successful/Successful';
import { Button } from '../../../../components';
// import Signature from '../../../../assets/icons/signature.svg';

export const AboutMeBlock = (): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<AboutMeBlockSection>
			<Htag tag="h2">{t('home:about.title')}</Htag>
			<Container>
				<Successful />
				<Wrapper>
					<MessageBlock>
						<Trans
							i18nKey="home:about.description"
							components={[<p></p>]}
						/>
					</MessageBlock>
					<Button className="button-resume" appearance="ghost" size="middle">{t('home:about.button')}</Button>
					{/* <Signature className="signature-icon" /> */}
				</Wrapper>
			</Container>
		</AboutMeBlockSection>
	);
};