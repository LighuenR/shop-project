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
        type:String, 
        required:true,
        default: "Muy barato"
       
        
    },
   "img":{
       type:String,
       required:true,
       default: "Sin imagen"
   },
   "stock":{
       type:Number,
       required:true
    
   },
   "size": {
        type:String, 
        required:true,
        default: "S"
   }
});

//Export the model
module.exports = mongoose.model('Product', productSchema);