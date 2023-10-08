/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* global google */
import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import Iconmap from "../../../assets/images/marker.png";
import { IMAGEPATH } from "../../../../config";
import Utils from "../../../../helpers/utils";

export const MapContainer = (props) => {
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const onMarkerClick = (props, marker) => {
    setState({
      selectedPlace: props.place_,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  // const showDetails = (place) => { };

  return (
    <div className="map-container">
      <Map
        google={props.google}
        className={"map"}
        zoom={4}
        initialCenter={props.center}
      >
        {props.places.map((place) => {
          return (
            <Marker
              icon={{ url: Iconmap }}
              onClick={onMarkerClick}
              key={place.id}
              place_={place}
              position={{ lat: place.latitude, lng: place.longitude }}
            />
          );
        })}
        <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInfoWindow}
        >
          <div
            className="profile-widget"
            style={{ width: "100%", display: "inline-block" }}
          >
            <div className="doc-img">
              <a href={"/patient/doctor-profile"} tabIndex={0} target="_blank">
                <img
                  style={{ height: "auto", width: "200px" }}
                  alt={state.selectedPlace?.name}
                  src={IMAGEPATH + state.selectedPlace?.photos}
                />
              </a>
            </div>
            <div className="pro-content">
              <h3 className="title">
                <a
                  href={"/patient/doctor-profile"}
                  tabIndex={0}
                  target="_blank"
                >
                  {" "}
                  {state.selectedPlace?.name}{" "}
                </a>
                <i className="fas fa-check-circle verified" />
              </h3>
              <p className="speciality">
                {" "}
                {state.selectedPlace?.specialist?.name}{" "}
              </p>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="d-inline-block average-rating ms-1">
                  ( {100} )
                </span>
              </div>
              <ul className="available-info">
                <li>
                  <i className="fas fa-map-marker-alt" />
                  {Utils.formatAddress(state.selectedPlace?.addresses)}
                </li>
                <li>
                  <i className="far fa-clock" /> {"Available on Fri, 22 Mar"}
                </li>
                <li>
                  <i className="far fa-money-bill-alt" />{" "}
                  {"RP " +
                    Utils.doctorPrice(
                      state.selectedPlace?.prices
                    )?.toLocaleString("id", "ID")}
                </li>
              </ul>
            </div>
          </div>
        </InfoWindow>
        {/* <InfoWindowEx
          marker={state.activeMarker}
          visible={state.showingInfoWindow}
        >
          
        </InfoWindowEx> */}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "",
})(MapContainer);
