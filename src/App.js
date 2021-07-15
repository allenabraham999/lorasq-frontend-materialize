import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Map from './components/pages/Map/Map';
import Profile from './components/pages/Profile/Profile';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Map} />
        <Route path='/products' component={Profile} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
