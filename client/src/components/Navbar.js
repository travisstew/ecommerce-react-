import React, { Component } from 'react';
class Navbar extends Component {
    state = {
      collapsed: true,
      }

    toggleNavbar =()=>{
      this.setState({
        collapsed:!this.state.collapsed,
      })
  }
  render() { 
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse   flex-row-reverse ' : 'collapse navbar-collapse show ';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed ' : 'navbar-toggler navbar-toggler-right';


    return ( 
    
    <>
      <nav  class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand" href="#">Navbar</a>
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className={`${classOne}`} id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>

            </ul>
          </div>
      </nav>

    </>
    );
  }
}

export default Navbar;