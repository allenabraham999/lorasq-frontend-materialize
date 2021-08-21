import React,{useState} from 'react';
import { Card } from 'reactstrap';
import x from "./Data";
import "./Profile.css";
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { func } from 'prop-types';
import { preProcessFile } from 'typescript';

function handleChange(key,newData,setNewData){
  console.log("Here!");
  console.location(key);
  setNewData(prevValue=>{
    console.log(prevValue);
  }
  );
}

function handleSubmit(newData){

}

function Profile() {
  console.log(x);
  const [modalIsOpen,setOpen] = useState(false);
  const [newData,setNewData] = useState(x);
  return (
    <div>
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-content">
          <table>
            <tr>
              <td>Name</td>
              <td>{x.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{x.email}</td>
            </tr>
            <tr>
              <td>phone number</td>
              <td>{x.phoneno}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{x.location}</td>
            </tr>
            <tr>
              <td>No of people</td>
              <td>{x.nop}</td>
            </tr>
          </table>
        </div>
        <button onClick={()=>{setOpen(true)}} className="edit-user-button"><i class="fas fa-user-edit"></i></button>
      </div>
    
    <Modal isOpen= {modalIsOpen}>
    <button id="close" className="close-button" onClick={() => setOpen(false)}><i class="fas fa-times"></i></button>
      <div className="edit-container">
        <div>
        <label id = "name">Name</label>
        <input type="text" for="name" onChange={()=>handleChange("name",newData,setNewData)}></input>
        </div>
        <div>
        <label id = "email">Email</label>
        <input type="email" for="email" onChange={handleChange("email",newData,setNewData)}></input>
        </div>
        <div>
        <label id = "pno">Phone No.</label>
        <input type="number" for="pno" onChange={handleChange("phoneno",newData,setNewData)}></input>
        </div>
        <div>
        <label id = "loc">Location</label>
        <input type="text" for="loc" onChange={handleChange("location",newData,setNewData)}></input>
        </div>
        <div>
        <label id = "ppl">No. of People</label>
        <input type="text" for="ppl" onChange={handleChange("nop",newData,setNewData)}></input>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="submitter" onClick={handleSubmit(newData)}>
          Submit
        </button>
      </div>
    </Modal>


    </div>
  );
}

export default Profile;
