const product = require('..//models/product');
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Shopping-cart',{useNewUrlParser:true}, function error(req,res){
   if(error){
     console.log(error);
   }
   console.log('Connecting to DB');

 });

const products= [new product({
    imagePath:'/images/images.jfif',
    productName:'Huwaei Y7',
    productInformation:{
        Annonced : 'Released 2019, March 07',
        displaySize: '168g, 8.1mm thickness',
        StorageCapacity:'32GB/64GB storage, microSDXC',
        CameraResolution:'selfie 8MP Main 16MP',
        Battery:'Li-Ion 4000 mAh, non-removable',
    },
    productPrice:220,


}),

new product({
    imagePath:'/images/shopping (2).png',
    productName:'Samsung',
    productInformation:{
        Annonced : 'Released 2019, March 07',
        displaySize: '168g, 8.1mm thickness',
        StorageCapacity:'32GB/64GB storage, microSDXC',
        CameraResolution:'selfie 8MP Main 16MP',
        Battery:'Li-Ion 4000 mAh, non-removable',
    },
    productPrice:250,


}),
new product({
    imagePath:'/images/images (3).jfif',
    productName:'Iphone 5 plus',
    productInformation:{
        Annonced : 'Released 2019, March 07',
        displaySize: '168g, 8.1mm thickness',
        StorageCapacity:'32GB/64GB storage, microSDXC',
        CameraResolution:'selfie 8MP Main 16MP',
        Battery:'Li-Ion 4000 mAh, non-removable',
    },
    productPrice:420,


}),
new product({
    imagePath:'/images/images (4).jfif',
    productName:'OPPO A53',
    productInformation:{
        Annonced : 'Released 2019, March 07',
        displaySize: '168g, 8.1mm thickness',
        StorageCapacity:'32GB/64GB storage, microSDXC',
        CameraResolution:'selfie 8MP Main 16MP',
        Battery:'Li-Ion 4000 mAh, non-removable',
    },
    productPrice:540,


}),
new product({
    imagePath:'/images/images (5).jfif',
    productName:'Techno',
    productInformation:{
        Annonced : 'Released 2019, March 07',
        displaySize: '168g, 8.1mm thickness',
        StorageCapacity:'32GB/64GB storage, microSDXC',
        CameraResolution:'selfie 8MP Main 16MP',
        Battery:'Li-Ion 4000 mAh, non-removable',
    },
    productPrice:340,


}),
new product({
    imagePath:'/images/shopping (1).png',
    productName:'Redmi 9pro ',
    productInformation:{
        Annonced : 'Released 2019, March 07',
        displaySize: '168g, 8.1mm thickness',
        StorageCapacity:'32GB/64GB storage, microSDXC',
        CameraResolution:'selfie 8MP Main 16MP',
        Battery:'Li-Ion 4000 mAh, non-removable',
    },
    productPrice:810,


}),
new product({
    imagePath:'/images/shopping (1).png',
    productName:'Nokia ',
    productInformation:{
        Annonced : 'Released 2019, March 07',
        displaySize: '168g, 8.1mm thickness',
        StorageCapacity:'32GB/64GB storage, microSDXC',
        CameraResolution:'selfie 8MP Main 16MP',
        Battery:'Li-Ion 4000 mAh, non-removable',
    },
    productPrice:810,


}),



]

var done=0;
for (var index = 0; index < products.length; index++) {
    products[index].save(function(error,doc){
if(error){
    consoe.log(error);
}
    console.log(doc)
    done++;
    if(done === products.length){
        mongoose.disconnect();
    }

    })
    
}
