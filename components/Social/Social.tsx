import React from 'react';
import { SocialProps } from './Social.types';
import { Container, Wrapper, Link } from './Social.styles';

import LinkendinIcon from '../../assets/icons/linkendin.svg';
import GmailIcon from '../../assets/icons/gmail.svg';
import GitHubIcon from '../../assets/icons/github.svg';

export const Social = ({ icons, icon, className }: SocialProps): JSX.Element => {
	const getIcon = (icon: string): JSX.Element => {
		switch(icon) {
			case 'linkendin':
				return <Link className={className} href={'https://www.linkedin.com/in/aprydatko'} target="_blank" title="LinkedIn">
					<LinkendinIcon className="linkendin" />
				</Link>;
			case 'gmail':
				return <Link className={className} href={'mailto:artyrpridatko@gmail.com'} title="Gmail">
					<GmailIcon className="gmail" />
				</Link>;
			default:
				return <Link className={className} href={'https://github.com/aprydatko'} target="_blank" title="GitHub">
					<GitHubIcon className="github" />
				</Link>;
		}
	};
	return (
		<Container>
			{icon && <Wrapper>{getIcon(icon)}</Wrapper>}
			{icons && icons.map((it, index) => 
				<Wrapper key={index}>
					{getIcon(it)}
				</Wrapper>)}
		</Container>
	);
};