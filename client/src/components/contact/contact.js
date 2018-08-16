import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  
} from "react-google-maps";
import ReactContactForm from 'react-mail-form';
import "./contact.css";
import StickyFooter from 'react-sticky-footer';
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel"



const Contact = compose(
 
  withProps({
 
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQBbfCj1bMpoMGT3wX5hVxTkggFCPh_k&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <div className="contactwrapper">
  
  <div className="contactaddress">
  <h4><strong>CONTACT US</strong></h4>
  <p>
Renovo
2200 Colorado Ave
Santa Monica, CA 90404, (310) 828-7267</p>
  </div>
  <div className="contactform">
  <ReactContactForm to="address@gmail.com" />
  </div>
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: 34.027180, lng: -118.475445}}>
    {props && (
      <MarkerWithLabel
      position={{ lat: 34.027180, lng: -118.475445 }}
      labelAnchor={{ lat: 34.027180, lng: -118.475445 }}
      labelStyle={{backgroundColor: "white", opacity: .6, fontSize: "13px", padding: "6px"}}
    >
      <div><strong>Renovo
2200 Colorado Ave
Santa Monica, CA 90404</strong></div>
    </MarkerWithLabel>
    )}
  </GoogleMap>
  <StickyFooter
            bottomThreshold={50}
            normalStyles={{
                backgroundColor: "rgba(255,195,77,.8)",
                padding: "2rem"
            }}
            stickyStyles={{
                backgroundColor: "rgba(255,195,77,.8)",
                padding: "2rem"
            }}
        >
           copyright @ aliendevelopers  2018
        </StickyFooter>
 </div>
));

export default Contact;
