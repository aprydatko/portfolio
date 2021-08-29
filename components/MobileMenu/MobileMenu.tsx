import React from 'react';
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';
import { MenuItemProps, MenuProps } from './MobileMenu.props';
import { Wrapper, HiddenMenu, ItemWrap  } from './MobileMenu.styles';

import common from '../../locales/en/common.json';
import { Header } from '../../layout/Header/Header';
import { Social, InfoBlock } from '../../components';

const MenuItem = ({ id, hash, t }: MenuItemProps): JSX.Element => {
	return (
		<ItemWrap key={id}>
			<Link
				href={{
				pathname: "/",
				hash: hash
				}}
			>
				{t(`common:menu.${id}.name`)}
			</Link>
		</ItemWrap>
	);
};

export const MobileMenu = ({ props }): JSX.Element => {
	const { t } = useTranslation();
	const { menu } = common;
	console.log('props', props);
	return (
		<>
		{props.openMenu && (
			<Wrapper>
				<Header props={props} />
				<HiddenMenu>
					<Social className="social" icons={['linkendin', 'gmail', 'github']} />
					{menu.map(item => <MenuItem {...item} t={t} />)}
				</HiddenMenu>
				<InfoBlock 
					page="home"
					section="welcome"
				/>
			</Wrapper>
		)}
		</>
	);
};