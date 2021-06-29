import { Fragment } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import {Switch, HashRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';


function App() {
  return (

    <Fragment>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
          <Landing />
          </Route>
          <Route exact path="/dashboard">
            <h1>Dashboard Page</h1>
          </Route>
          <Route exact path="/profile">
            <h1>Profile page</h1>
          </Route>
          <Route exact path="/map">
            <h1>Map Page</h1>
          </Route>
          <Route>
            <h1>404 not Found</h1>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
