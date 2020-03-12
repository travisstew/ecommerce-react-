import React from 'react';

function ProductCard(props) { 
  console.log(props.images);
  
  
    return(

      <div class="col">
          <div class="card" style={{width: 18+"rem"}}>
            {/* {props.images.map(e=>
                <img src={e.pic} class="card-img-top" alt="..."/>
            )} */}
            <img src="" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
       </div>
    );
}

export default ProductCard;