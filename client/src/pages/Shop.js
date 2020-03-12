import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Axios from 'axios';
import ProductCard from '../components/ProductCards';
class Shop extends Component {
  state = { 
    items:[]
   }

  componentDidMount(){

      Axios('/items').then(res=>{
        this.setState({
          items: res.data
      });
      
    });
  }

  render() { 
    
    this.state.items.map(e=>{
        console.log(e.name);
        
    });
    
    return (
      <div>
        <Navbar/>

        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Fluid jumbotron</h1>
              <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>

        <div className="sort-bar">

        </div>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">

            {
              this.state.items.map(item=>

              <ProductCard 
                 name={item.name}
                 images={item.images}
              />

              
              )}
          
          
          </div>
        </div>

      </div>
      );
  }
}
 
export default Shop ;