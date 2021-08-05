import React from 'react';
import '/home/wafflemyth/lorasq-frontend-materialize/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="login1">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top"  style={{padding:'10px',marginBottom:'0px',height:'60px'}}>
        <div className="container">
          <Link className="nav1balog" to={"/sign-in"} ><h5 style={{color:'#1c2237', fontWeight:'bold',marginTop:'10px'}}>LoRasQ</h5></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link1" to={"/sign-in"}><h6 style={{color:'#1c2237', fontWeight:'bold',padding:'10px',marginTop:'10px',fontSize:'17px'}}>Sign In</h6></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link1" to={"/sign-up"}><h6 style={{color:'#1c2237', fontWeight:'bold',padding:'10px',marginTop:'10px',fontSize:'17px'}}>Sign Up</h6></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
        <form>
                <h3 style={{fontFamily:'sans-serif', fontWeight:'bold'}}>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Phone no:</label>
                    <input type="contact" className="form-control" placeholder="Phone number" />
                </div>
                <div className="form-group">
                    <label>District</label>
                    <input type="text" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Number of Persons</label>
                    <input type="number" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
              

                <button type="submit" className="btn btn-dark btn-lg btn-block" style={{backgroundColor:'#1c2237'}}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">Log In?</a>
                </p>
            </form>
         
        </div>
      </div>
    </div>
  );
}

export default Signup;
