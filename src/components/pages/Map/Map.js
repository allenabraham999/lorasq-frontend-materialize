import React, {useState} from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import HelpNeeded from "./Data";

var myIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12.25, 41],
  popupAnchor: [0, -41],
});


function deleter(props,index){
  console.log("I have been deleted!"+index);
  console.log("Data:"+HelpNeeded[index])
  console.log(HelpNeeded[index])
  delete HelpNeeded[index];
  console.log(HelpNeeded);
}

function MarkerMaker(data,index) {
  const [saved,changeSaved] = useState("Help Needed!!");
  return (
    <Marker position={[data.lat, data.lng]} icon={myIcon}>
      <Popup className="popup">
        <div className="contents">
          <b>{saved}</b> <br /> Latitude: {data.lat} <br /> Longitude:{data.lng}.
          <br></br>
          <button onClick={()=>saved==="Help Needed!!" ?changeSaved("Saved"):changeSaved("Help Needed!!")} className="the-button">Saved</button>
          <button onClick={(props)=>deleter(props,index)} className="the-button">Remove</button>
        </div>
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
      <div><h1>Settings!</h1></div>
    </div>
  );
}

export default Mapp;
