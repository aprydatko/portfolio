import React from 'react';
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';
import { MenuItemProps, MobileMenuProps } from './MobileMenu.props';
import { Wrapper, HiddenMenu, ItemWrap, WrapperMenu } from './MobileMenu.styles';

import common from '../../locales/en/common.json';
import { Header } from '../../layout/Header/Header';
import { Social, InfoBlock } from '../../components';

const menuAnimate = {
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.25,
		}
	}),
	hidden: { opacity: 0, y: 100 }
}

const MenuItem = ({ id, hash, url, openMenu, toggleMenu }: MenuItemProps): JSX.Element => {
	const { t } = useTranslation();
	return (
		<ItemWrap 
			key={id}
			variants={menuAnimate}
			initial={openMenu ? 'hidden' : 'visible'}
			animate={openMenu ? 'visible' : 'hidden'}
			custom={id}
		>
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

export const MobileMenu = ({ openMenu, toggleMenu, ...props }: MobileMenuProps): JSX.Element => {
	const { t } = useTranslation();
	const { menu } = common;
	return (
		<Wrapper 
			openMenu={openMenu}
		>
			<Header openMenu={openMenu} toggleMenu={toggleMenu} {...props} />
			<WrapperMenu>
				<Social 
					className="social" 
					icons={['linkendin', 'gmail', 'github']}
					openMenu={openMenu}
					// themeName={props.theme}
					trigger="mobileMenu"
				 />
				<HiddenMenu>
					{menu.map((item, index) => 
						<div key={index}>
							<MenuItem openMenu={openMenu} toggleMenu={toggleMenu} {...item} id={index} />
						</div>)}
				</HiddenMenu>
			</WrapperMenu>
			<InfoBlock
				className="mobile-menu"
				openMenu={openMenu} 
				page="home"
				section="welcome"
			/>
		</Wrapper>
	);
};