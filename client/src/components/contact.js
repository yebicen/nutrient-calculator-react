import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const Contact = compose(
  withProps({
 
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQBbfCj1bMpoMGT3wX5hVxTkggFCPh_k&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: 34.027180, lng: -118.475445}}>
    {/* {props && (
      <Marker position={{ lat: 34.027180, lng: -118.475445 }} />
    )} */}
  </GoogleMap>
 
));



// ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
export default Contact;
