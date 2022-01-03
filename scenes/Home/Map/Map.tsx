import React from 'react';
import GoogleMapReact from 'google-map-react';

import { Wrapper, MarkerWrap } from './Map.styles';

const Marker = ({ text }) => <MarkerWrap>{text}</MarkerWrap>;

export const Map = (): JSX.Element => {
	const config = {
		center: {
			lat: 50.895341158562395,
			lng: 34.80800172701902
		},
    	zoom: 16
  	};
	return (
		<Wrapper>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyCdisdBK2HVtByA5Hoqv9_pZldcDDizCQ4' }}
				defaultCenter={config.center}
				defaultZoom={config.zoom}
			>
				<Marker
					lat={50.895341158562395}
					lng={34.80800172701902}
					text="Marker"
				/>
        	</GoogleMapReact>
		</Wrapper>
	);
};