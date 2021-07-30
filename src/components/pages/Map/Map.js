import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import HelpNeeded from "./Data";

var myIcon = L.icon({
  iconUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12.25, 41],
  popupAnchor: [0, -41],
});

function MarkerMaker(data) {
  return (
    <Marker position={[data.lat, data.lng]} icon={myIcon}>
      <Popup>
        <b>Help Needed!</b> <br /> Latitude: {data.lat} <br/> Longitude:{data.lng}.
      </Popup>
    </Marker>
  );
}

function Mapp() {
  const state = {
    lat: 45.0535,
    lng: -0.09,
    zoom: 13,
  };
  const position = [state.lat, state.lng];
  return (
    <div className="map-holder">
      <MapContainer
        className="map"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {HelpNeeded.map(MarkerMaker)}
      </MapContainer>
    </div>
  );
}

export default Mapp;
