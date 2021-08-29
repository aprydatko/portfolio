import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { ButtonProps } from './ToggleLanguage.props';
import { Wrapper, Select, Item } from './ToggleLanguage.styles';

// import EngFlag from '../../public/flags/en.svg';
// import RuFlag from '../../assets/icons/flags/ru.svg';
import ukFlag from '../../public/flags/uk.png';

export const ToggleLanguage = (props): JSX.Element => {
	// console.log("props", props);
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('en');

	const handleChange = (event) => {
		event.preventDefault();
		const language = event.target.value;


		setValue(language);
		router.push(`/${language}`);

		// console.log('value', value);
		// props.toggleLanguage(value);
	};
	return (
		<Wrapper>
			<Select>
				{/* <Item><EngFlag className="icon" /></Item> */}
				{/* <Item><RuFlag className="ru-icon" /></Item> */}
				{/* <Item><Image src={ukFlag} alt="Picture of the author" /></Item> */}
			</Select>

			{/* <select onChange={(e) => handleChange(e)} value={value}>
				<option value="en">en</option>
				<option value="ru">ru</option>
				<option value="uk">uk</option>
			</select> */}
		</Wrapper>
	);
};