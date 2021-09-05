import React, { useState, useEffect } from 'react';
import { useRouter, withRouter  } from 'next/router';
import { Wrapper, Select, Item } from './ToggleLanguage.styles';

export const ToggleLanguage = withRouter((props): JSX.Element => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [language, setLanguage] = useState('en');

	useEffect(() => {
		const pathname = window.location.pathname.split('/').find(t => t === 'en' || t === 'uk' || t === 'ru');
		if (pathname && language !== pathname) {
			setLanguage(pathname);
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
				{(language === 'uk' || open) && <Item title="Украинский язык" onClick={() => handleClick('uk')} style={{ backgroundImage: `url(/flags/uk.png)` }} />}
				{(language === 'ru' || open) && <Item title="Русский язык" onClick={() => handleClick('ru')} style={{ backgroundImage: `url(/flags/ru.png)` }} />}
				{(language === 'en' || open) && <Item title="Английский язык" onClick={() => handleClick('en')} style={{ backgroundImage: `url(/flags/en.png)` }} />}
			</Select>
		</Wrapper>
	);
});