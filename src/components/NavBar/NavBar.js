import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

export default function NavBar()  {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">LoRasQ</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
      </nav>
    );
  };