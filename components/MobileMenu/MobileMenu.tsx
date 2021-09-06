import React from 'react';
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';
import { MenuItemProps } from './MobileMenu.props';
import { Wrapper, HiddenMenu, ItemWrap  } from './MobileMenu.styles';

import common from '../../locales/en/common.json';
import { Header } from '../../layout/Header/Header';
import { Social, InfoBlock } from '../../components';

const MenuItem = ({ id, hash, url, toggleMenu }: MenuItemProps): JSX.Element => {
	const { t } = useTranslation();
	return (
		<ItemWrap key={id}>
			<Link
				href={{
				pathname: url ? "/" + t(`common:menu.${id}.url`) : '/',
				hash: hash ? hash : null
				}}
			>
				<a onClick={toggleMenu}>
					{t(`common:menu.${id}.name`)}
				</a>
			</Link>
		</ItemWrap>
	);
};

export const MobileMenu = ({ props }): JSX.Element => {
	const { t } = useTranslation();
	const { menu } = common;
	return (
		<>
		{props.openMenu && (
			<Wrapper>
				<Header props={props} />
				<HiddenMenu>
					<Social className="social" icons={['linkendin', 'gmail', 'github']} />
					{menu.map(item => <MenuItem {...item} toggleMenu={props.toggleMenu} />)}
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