import React from 'react';
import { Img, ImgWrap } from './Map.styles';

export const Map = (): JSX.Element => {
	return (
		<ImgWrap>
			<Img src={'/map.jpg'} alt="map" />
		</ImgWrap>
	);
};