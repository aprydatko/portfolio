import React from "react";
import * as Scroll from "react-scroll";
import GoogleMapReact from "google-map-react";

import { Wrapper } from "./Map.styles";
import Marker from "./Marker/Marker";

export const Map = (): JSX.Element => {
    const Element = Scroll.Element;
    const config = {
        center: {
            lat: 50.895341158562395,
            lng: 34.80800172701902,
        },
        zoom: 16,
    };
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
    return (
        <Element name="map" className="map">
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
                            text="😉"
                        />
                    </GoogleMapReact>
                )}
            </Wrapper>
        </Element>
    );
};
