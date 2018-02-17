import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import React from "react";

const riderMap = new Map([
  [ 0, {
    name: "Timothy Gu",
    profilePic: require("../../../resources/images/mario-large.png")
  }],
  [ 1, {
    name: "Somebody Else",
    profilePic: require("../../../resources/images/small.jpg")
  }]
]);

const riderPositions = [
  {id: 0, pos: {lat: 34.069735, lng: -118.445130}}
];

const ridePlans = [
  {
    owner: 0,
    start: {lat: 34.069735, lng: -118.445130},
    end: {lat: 34.069735, lng: -118.445130}
  }
];  

export default class MainMap extends React.Component
{
  render()
  {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: 34.069735, lng: -118.445130}}
      >
        {riderPositions.map(riderPos => {
          const imageURL = riderMap.get(riderPos.id).profilePic;
          return <Marker
            position={riderPos.pos}
            label={riderMap.get(riderPos.id).name}
            icon={{
              url: imageURL,
              scaledSize: {
                height: 75,
                width: 75
              }
            }}/>;
        })}
      </GoogleMap>
    ));
    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuOlQqOGMUv1a_gO0xbY0jAab0sHfSRw8&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    );
  }

}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAuOlQqOGMUv1a_gO0xbY0jAab0sHfSRw8"
// }) (MainMap);




