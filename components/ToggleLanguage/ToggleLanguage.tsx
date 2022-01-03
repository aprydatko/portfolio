import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { useRouter, withRouter  } from 'next/router';
import { Wrapper, Select, Item } from './ToggleLanguage.styles';

export const ToggleLanguage = withRouter((): JSX.Element => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [language, setLanguage] = useState('');

	const listVariants = {
		visible: (i: any) => ({
			opacity: 1,
		}),
		hidden: { opacity: 0,  }
	};

	useEffect(() => {
		const pathname = window.location.pathname.split('/').find(t => t === 'en' || t === 'uk' || t === 'ru');
		if (pathname && language !== pathname) {
			setLanguage(pathname);
		}
	}, []);
	
	const handleClick = (lng: string): void => {
		console.log('--- ---', lng);
		const url = `/${lng}`;
		setOpen(!open);
		setLanguage(lng);
		router.push(url, url, { locale: lng });
	};
	return (
		<Wrapper>
			<Select>
				<AnimatePresence>
					{['uk', 'ru', 'en'].map((lng, index) => {
						if (language === lng || open) {
							return (
								<Item 
									key={lng} 
									title="Украинский язык" 
									onClick={() => handleClick(lng)} 
									style={{ backgroundImage: `url(/flags/${lng}.png)` }}
									variants={listVariants} 
									initial="hidden"
									animate="visible"
									custom={index}
								/>
							)
						}
					})}
				</AnimatePresence>
			</Select>
		</Wrapper>
	);
});