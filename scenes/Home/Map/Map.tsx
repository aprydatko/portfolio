import React from 'react';
import GoogleMapReact from 'google-map-react';

import { Wrapper, MarkerWrap } from './Map.styles';
import { MapProps } from './Map.props';

const Marker = ({ text }: MapProps) => <MarkerWrap>{text}</MarkerWrap>;

export const Map = (): JSX.Element => {
	const config = {
		center: {
			lat: 50.895341158562395,
			lng: 34.80800172701902
		},
    	zoom: 16
  	};
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
	return (
		<Wrapper>
			{apiKey && (
				<GoogleMapReact
					bootstrapURLKeys={{ key: apiKey }}
					defaultCenter={config.center}
					defaultZoom={config.zoom}
				>
					<Marker
						lat={50.895341158562395}
						lng={34.80800172701902}
						text="Marker"
					/>
				</GoogleMapReact>
			)}
		</Wrapper>
	);
};