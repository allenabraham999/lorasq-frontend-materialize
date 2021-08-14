import React from 'react';
import { Card } from 'reactstrap';
import x from "./Data";
import "./Profile.css";

function CardCreator(d) {
  return (
    // <span style={{"font-size":"20px"}}></span>
    <div className="save-card">
      <h1><span className="span-desc">Location </span > <span className="span-value"> {d.loc}</span></h1>
      <h1><span className="span-desc">Name </span > <span className="span-value" >{d.name}</span></h1>
      <h1><span className="span-desc">Latitude </span ><span className="span-value">{d.lat}</span></h1>
      <h1><span className="span-desc">Longitude </span  > <span className="span-value">{d.long} </span></h1>
    </div>
  )
}

function Profile() {
  console.log(x);
  return (
    <div className="container-profile">
      <div>
        <h1 className="heading-prof">Help Needed!!</h1>
      </div>
      <hr className="breaker"></hr>
      {x.map(CardCreator)}
    </div>
  );
}

export default Profile;
