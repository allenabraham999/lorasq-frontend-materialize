import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import HelpNeeded from "./Data";
import Modal from "react-modal";

var myIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12.25, 41],
  popupAnchor: [0, -41],
});


function deleter(props, index) {
  console.log("I have been deleted!" + index);
  console.log("Data:" + HelpNeeded[index])
  console.log(HelpNeeded[index])
  delete HelpNeeded[index];
  console.log(HelpNeeded);
}

function MarkerMaker(data, index) {
  const [saved, changeSaved] = useState("Help Needed!!");
  return (
    <Marker position={[data.lat, data.lng]} icon={myIcon}>
      <Popup className="popup">
        <div className="contents">
          <b>{saved}</b> <br /> Latitude: {data.lat} <br /> Longitude:{data.lng}.
          <br></br>
          <button onClick={() => saved === "Help Needed!!" ? changeSaved("Saved") : changeSaved("Help Needed!!")} className="the-button">Saved</button>
          <button onClick={(props) => deleter(props, index)} className="the-button">Remove</button>
        </div>
      </Popup>
    </Marker>
  );
}


function inputChange(x, pos, setPosition, position) {
  console.log("Happening!");
  console.log(Number(x.target.value));
  if (pos === 0) {
    let same = position[1];
    setPosition([Number(x.target.value), same]);
  } else {
    let same = position[0];
    setPosition([same, Number(x.target.value)]);
  }
}

function Mapp() {
  const state = {
    lat: 45.0535,
    lng: -0.09,
    zoom: 13,
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState([state.lat, state.lng]);

  return (
    <div className="map-holder">
      <MapContainer
        className="map"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        {console.log("position:")}
        {console.log(position)}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {HelpNeeded.map(MarkerMaker)}
      </MapContainer>
      <div className="settings">
        <Modal isOpen={modalIsOpen}>
          <div className="modal-con">
          <button id="close" className="close-button" onClick={() => setIsOpen(false)}><i class="fas fa-times"></i></button>
            <h1>Change center</h1>
            <label>Lattitude</label>
            <input onChange={(event) => inputChange(event, 0, setPosition, position)}></input>
            <br></br>
            <label>Longitude</label>
            <input onChange={(event) => inputChange(event, 1, setPosition, position)}></input>
            <br></br>
            <br></br>
            <button>Submit</button>
            {/* <br></br> */}
            <br></br>
            {console.log("position is being printed!")}
            {console.log(position)}
            {console.log("position has been printed!")}
          </div>
        </Modal>
        <button onClick={() => setIsOpen(true)} className="button">
          Settings
        </button>
      </div>
      {console.log(position)}
    </div>
  );
}

export default Mapp;
