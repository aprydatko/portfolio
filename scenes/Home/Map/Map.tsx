import React from 'react';
import { Img, ImgWrap } from './Map.styles';

export const Map = (): JSX.Element => {
	return (
		<ImgWrap>
			<Img src={'/map.jpg'} alt="map" />
			{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80519.71875054244!2d34.744174129061456!3d50.900752761823085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41290220fc73a461%3A0xdb74f6366b836c28!2z0KHRg9C80YssINCh0YPQvNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0MDAwMA!5e0!3m2!1sru!2sua!4v1630957718050!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
		</ImgWrap>
	);
};