import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Mapp from './components/pages/Map/Map';
import Profile from './components/pages/Profile/Profile';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import ScrollToTop from './components/ScrollToTop';
import AdminLayout from 'admin/layouts/Admin.js'
function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path='/services' component={Map} />
        <Route path='/products' component={Profile} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
