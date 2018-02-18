import {withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline} from "react-google-maps";
import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel";
import React from "react";
import * as styles from "./mainMap.scss";
import PlanInfo from "./planInfo";



const riderMap = new Map([
  [ 0, {
    name: "Timothy Gu",
    profilePic: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p240x240/25289395_580199598990166_6832287032818170474_n.jpg?oh=ee2c9d1db71295e66868275e14569f1f&oe=5B131AD5"
  }],
  [ 1, {
    name: "Hakan Alpay",
    profilePic:"https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p240x240/18010567_983310241805792_8700761523733602063_n.jpg?oh=558971a81768a91d419bf6c685163ccb&oe=5B057A64"
  }],
  [ 2, {
    name: "Arpi Beshlikyan",
    profilePic: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p240x240/26815372_457947614603212_6180372456965905906_n.jpg?oh=085b2eed13cfec3e10d4c58a204eaf8a&oe=5B264B1E"
  }],
  [ 3, {
    name: "Alexandre Ninua",
    profilePic: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p240x240/26992356_574807149527770_1756966645001432152_n.jpg?oh=6fd4d9853684cc69dadc5b4688b955b3&oe=5B0F60F4"
  }],
  [ 4, {
    name: "Ben Limpanukorn",
    profilePic: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c120.0.240.240/p240x240/12654448_1013133388725788_2502109814197930535_n.jpg?oh=7dac92950ee322bd0ee6d36df8d99bb6&oe=5B0F72CC"
  }],
]);

const ridePlans = [
  {
    owner: 0,
    start: {lat: 34.068970, lng: -118.439123},
    end: {lat: 34.066911, lng: -118.428831},
    time: "7:30 pm",
    among: [0, 1, 2, 3]
  },
  {
    owner: 4,
    start: {lat: 34.061673, lng: -118.448439},
    end: {lat: 34.062447, lng: -118.435111},
    time: "9:00 pm",
    among: 4
  }
];

const center = {lat: 34.069735, lng: -118.445130};

export default class MainMap extends React.Component
{


  constructor(props)
  {
    super(props);
    this.state = {
      showPlanWindow: false,
      selectedPlan: null,
      mapHeight: window.innerHeight,
      centerTo: center
    };
    this.closePlanWindow = this.closePlanWindow.bind(this);
    this.openPlanWindow = this.openPlanWindow.bind(this);
    this.googleMapRef = this.googleMapRef.bind(this);
    this.googleMapObj = undefined;
  }

  renderPlanInfo()
  {

    return (<PlanInfo ridePlan={ridePlans[this.state.selectedPlan]} riderMap={riderMap} close={this.closePlanWindow}/>);
  }

  openPlanWindow(index, newCenter)
  {
    this.setState({showPlanWindow: true, selectedPlan: index, mapHeight: window.innerHeight*0.5, centerTo: newCenter});
  }
  closePlanWindow()
  {
    this.setState({showPlanWindow: false, mapHeight: window.innerHeight});
  }

  googleMapRef(googleMap)
  {
    this.googleMapObj = googleMap;
  }

  componentDidUpdate()
  {
    if (this.googleMapObj) {
      this.googleMapObj.panTo(this.state.centerTo);
    }
  }

  render()
  {
    const MapWithAMarker = withScriptjs(withGoogleMap(props => (
      <GoogleMap className={styles.map}
        defaultZoom={15}
        defaultCenter={{lat: 34.069735, lng: -118.445130}}
        ref={this.googleMapRef}
      >
        {this.state.showPlanWindow && this.renderPlanInfo()}
        {ridePlans.map((ridePlan, index) => {
          const imageURL = riderMap.get(ridePlan.owner).profilePic;
          return (<div>
            <MarkerWithLabel
              position={ridePlan.start}
              children={<p>{riderMap.get(ridePlan.owner).name}</p>}
              labelAnchor={{x: 22, y: 0}}
              labelClass={styles.marker_label_start}
              icon={{
                url: imageURL,
                scaledSize: {
                  height: 50,
                  width: 50
                }
              }}
              onClick={() => {
                this.openPlanWindow(index, ridePlan.start);
              }}
            />
            <Polyline path={[ridePlan.start, ridePlan.end]}/>
            <MarkerWithLabel
              position={ridePlan.end}
              children={<p>{riderMap.get(ridePlan.owner).name}</p>}
              labelAnchor={{x: 22, y: 0}}
              labelClass={styles.marker_label_end}
              icon={{
                url: imageURL,
                scaledSize: {
                  height: 50,
                  width: 50
                }
              }}
              onClick={() => {
                this.openPlanWindow(index, ridePlan.end);
              }}
            />
          </div>);
        })}
      </GoogleMap>)));
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




