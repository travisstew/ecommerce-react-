const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
    name: {
      type: String
    },
    quanity: {
      type: Number
    },
    description:{
      type: String
    },
    price: {
      type: Number
    },
    images: [{pic:{type:String}}]

});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;