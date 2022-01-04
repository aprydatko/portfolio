import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { InfoBlockProps } from './InfoBlock.props';
import { WelcomeInfo, WelcomeDescription } from './InfoBlock.styles';

import { Social } from '../../components';

export const InfoBlock = ({ children, social, page, section, className, openMenu }: InfoBlockProps): JSX.Element => {
	const { t } = useTranslation();
	return (
			<WelcomeInfo 
				openMenu={openMenu} 
				className={className}
				section={section}
			>
				{page && <WelcomeDescription>{t(`${page}:${section}.description`)}</WelcomeDescription>}
				{social && <Social className="social" icons={social} />}
				{children}
			</WelcomeInfo>
	);
};