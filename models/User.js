const mongoose  = require("mongoose");
const bcrypt= require('bcrypt');
const UserSchema=mongoose.Schema({

email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},

})
UserSchema.methods.hashPassword=function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null)
}
UserSchema.methods.comparePassword=function(password){
    return bcrypt.compareSync(password,this.password);
}
module.exports=mongoose.model('User',UserSchema);
