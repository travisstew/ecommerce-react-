const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const axios = require('axios');

require('dotenv').config();

const db = require('../models');

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "profile",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const parser = multer({ storage: storage });

// add items //

router.post('/addItem', (req,res)=>{
  const {name,quanity,description,price} = req.body;
  console.log(name,quanity,description,price);

    const newItem  = new db.items({
        name: name,
        quanity:quanity,
        description: description,
        price: price,
    });

    newItem.save(function (err) {
      if(err){
        res.status(500).send('error registering user');
      }else{
        res.status(200).send('welcome ');
        res.end();
      }
      });
});
//get items
router.get('/items',function (req,res) { 
  db.items.find({}).then(function (data) { 
    res.send(data);
   });
});
//add images to items
router.put('/addImage',parser.single('images'),function (req,res) {
  
  
  db.items.findOneAndUpdate({_id:req.body.itemId}, 
      {
        $push:{images:{pic:req.file.url}}
      }).then(function() {  });

});



module.exports = router;