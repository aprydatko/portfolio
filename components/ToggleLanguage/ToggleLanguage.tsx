import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { useRouter, withRouter  } from 'next/router';
import { Wrapper, Select, Item } from './ToggleLanguage.styles';

export const ToggleLanguage = withRouter((): JSX.Element => {
	const { lang } = useTranslation();
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
		if (language !== lang) {
			setLanguage(lang);
		}
	}, []);
	
	const handleClick = (lng: string): void => {
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
						if (lang === lng || open) {
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