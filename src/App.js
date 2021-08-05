import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Map from './components/pages/Map/Map';
import Profile from './components/pages/Profile/Profile';
// import SignUp from './components/pages/SignUp/SignUp';
import Login from './components/pages/SignUp/Login';
import Signup from './components/pages/SignUp/signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import AdminLayout from 'admin/layouts/Admin.js'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path='/sign-in' component={Login} />
        <Route path='/sign-up' component={Signup} />

        <div>
          <Navbar />
          <ScrollToTop />
          <Route path='/' exact component={Home} />
          <Route path='/map' component={Map} />
          <Route path='/profile' component={Profile} />
       
          <Footer />
        </div>
      </Switch>
      
    </Router>
  );
}
export default App;
