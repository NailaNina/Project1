const mongoose  = require("mongoose");

const productSchema=mongoose.Schema({
imagePath:{
    type:String,
    required:true,
},
productName:{
    type:String,
    required:true,
},
productPrice:{
    
    type:Number,
    required:true,
},
productInformation:{
    required:true,
    type:{
        Annonced : String,
        displaySize:String,
        StorageCapacity:String,
        CameraResolution:String,
        Battery:String,
        
        




    },
},


});
module.exports=mongoose.model('product',productSchema);




