import {withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline} from "react-google-maps";
import React from "react";
import * as styles from "./mainMap.scss";
import PlanInfo from "./planInfo";

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

const ridePlans = [
  {
    owner: 0,
    start: {lat: 34.069735, lng: -118.445130},
    end: {lat: 33.069735, lng: -118.445130}
  }
];

export default class MainMap extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      showPlanWindow: false,
      selectedPlan: null,
      mapHeight: window.innerHeight
    };
    this.closePlanWindow = this.closePlanWindow.bind(this);
  }

  renderPlanInfo()
  {
    return (<PlanInfo ridePlan={ridePlans[this.state.selectedPlan]} riderMap={riderMap} close={this.closePlanWindow}/>);
  }

  closePlanWindow()
  {
    this.setState({showPlanWindow: false, mapHeight: window.innerHeight});
  }

  render()
  {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap className={styles.map}
        defaultZoom={8}
        defaultCenter={{lat: 34.069735, lng: -118.445130}}
      >
        {this.state.showPlanWindow && this.renderPlanInfo()}
        {ridePlans.map((ridePlan, index) => {
          const imageURL = riderMap.get(ridePlan.owner).profilePic;
          return (<div>
            <Marker
              position={ridePlan.start}
              label={riderMap.get(ridePlan.owner).name}
              icon={{
                url: imageURL,
                scaledSize: {
                  height: 50,
                  width: 50
                }
              }}
              onClick={() => {
                this.setState({showPlanWindow: true, selectedPlan: index, mapHeight: window.innerHeight * 0.5});
              }}
            />
            <Polyline path={[ridePlan.start, ridePlan.end]}/>
            <Marker
              position={ridePlan.end}
              label={riderMap.get(ridePlan.owner).name}
              icon={{
                url: imageURL,
                scaledSize: {
                  height: 50,
                  width: 50
                }
              }}
              onClick={() => {
                this.setState({showPlanWindow: true, selectedPlan: index, mapHeight: window.innerHeight * 0.5});
              }}
            />
          </div>);
        })}
      </GoogleMap>
    ));
    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuOlQqOGMUv1a_gO0xbY0jAab0sHfSRw8&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: this.state.mapHeight }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    );
  }

}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAuOlQqOGMUv1a_gO0xbY0jAab0sHfSRw8"
// }) (MainMap);




