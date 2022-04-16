import React from 'react';
import Image from 'next/image';
import MailIcon from '../../assets/icons/email.svg'
import { Wrapper, Content, Headline, IconWrap, Background } from './Alertstyles';

export const Alert = ({
	message
}: { message: string }): JSX.Element => {
	return (
		<>
			{/* <Background /> */}
			<Wrapper>
				<IconWrap>
					<MailIcon />
				</IconWrap>
				<Content>
					<Headline>{message}</Headline>
				</Content>
			</Wrapper>
		</>
	);
};