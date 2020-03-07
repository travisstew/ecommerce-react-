import React, { Component } from 'react';
import Axios  from 'axios';


class AddItem extends Component {
  constructor(props) {
    super(props);
    
     this.state = { 
      name: '',
      quanity: '',
      description: '',
      price: '',
      images: '',
      items:[],
      itemId:''
     }

     this.onFileChange = this.onFileChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.onImageSubmit = this.onImageSubmit.bind(this);
     this.changeHandler = this.changeHandler.bind(this);


  }

  changeHandler(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onFileChange(e){
    this.setState({
      image: e.target.files[0],
      itemId: e.currentTarget.dataset.item  
    });

  }
 
  //image submit
  onImageSubmit(e){
    e.preventDefault();
    console.log(this.state.itemId);
    const formData = new FormData();
    formData.append('images', this.state.image);
    formData.append('itemId', this.state.itemId);

    fetch('/addImage',{
      method: 'PUT',
      body: formData,
    }).then(res =>{
        
    })
  }

  //add item form 
  onSubmit(e){
    e.preventDefault();
    const {name,quanity,description,price} = this.state;
    console.log(name,quanity,description);
    
    Axios.post('/addItem', {name:name,quanity:quanity,description:description,price:price}).then(res=>{
      console.log(res);  
    });
    window.location.reload(true);
   
  }
  
  componentDidMount(){
    Axios('/items').then(res=>{
      console.log(res.data); 
      this.setState({
        items: res.data
      });
    });
    
    
  }

  render() { 
    console.log(this.state.items);
    return ( 
      <div>
        <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Item name</label>
              <input type="text" name="name" class="form-control" onChange={this.changeHandler} value={this.state.name} />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">quanity</label>
              <input type="number" name="quanity"  class="form-control" onChange={this.changeHandler} value={this.state.quanity} />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">description</label>
              <input type="text"  name="description" class="form-control" onChange={this.changeHandler} value={this.state.description} />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">price</label>
              <input type="number" name="price"  class="form-control" onChange={this.changeHandler} value={this.state.price}/>
            </div>
     
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

         
        <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">item</th>
                  <th scope="col">price</th>
                  <th scope="col">quanity</th>
                  <th scope="col">add images</th>
                </tr>
              </thead>
              <tbody>

              {this.state.items.map(item=> (

                <tr>
                  <th scope="row">{item._id}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quanity}</td>
                  <td>
                    <form onSubmit={this.onImageSubmit} encType="multipart/form-data">
                      <div class="form-group">
                        <input data-item={ item._id} onChange={this.onFileChange} type="file" class="form-control-file" />
                      </div>
                      <div className="form-group">
                            <button className="btn btn-primary" id="btn" type="submit">Upload</button>
                      </div>
                    </form>
                   </td>
                  
                </tr>

              ))}

              </tbody>
        </table>
            
      </div>



     );
  }
}
 
export default AddItem;