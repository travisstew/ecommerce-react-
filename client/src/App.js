import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import AddItem from './pages/AddItem'
import NotFound from './pages/NotFound';
import Shop from './pages/Shop'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/admin" component={AddItem}></Route>
            <Route  path="/shop" component={Shop}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
     );
  }
}
 
export default App;

