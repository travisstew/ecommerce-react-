import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../page-css/home.css'
class Home extends Component {

  render() { 
    return ( 
    
    <>
      <Navbar />
      <div>
        <div id="jumbotron" className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
        <div className="homepage-divs">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
      </div>
    </>
    );
  }
}

export default Home;