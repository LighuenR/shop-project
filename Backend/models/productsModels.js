const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Erase if already required

// Declare the Schema of the Mongo model
const productSchema = new Schema({
    "name":{
        type:String,
        required:true,
        index:true
    },
    "description":{
        type:String,
        required:true
        
    },
    "price":{
        type:Number, 
        required:true,
        default: 0
       
        
    },
   "img":{
       type:String,
       required:true,
       default: "Sin imagen"
   },
  
   "sizes": {
        type:Array, 
        default: ["S","M","L","XL","XXL"]

   }
});

//Export the model
module.exports = mongoose.model('Product', productSchema);