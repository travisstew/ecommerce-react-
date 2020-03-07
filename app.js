const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000; 


// moongoose config 
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ecommerce';


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false}).then(()=>{
  console.log('mongo connected');
}).catch(err=>{
  console.log(err);
});



//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//image upload to the cloud on cloudinary 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET
  });

 
require('dotenv').config();

//routes
app.use('/',require('./routes/admin-api'));
app.use('/', require('./routes/items-api'));


app.listen(PORT, function () {
  console.log('listening on port ' + PORT);
  
});


app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
      next(new Error('Something went wrong'));
    });
  });