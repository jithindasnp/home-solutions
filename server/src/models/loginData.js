const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jdjithin:maitexa2255@cluster0.me79b0j.mongodb.net/homeSolutionDB?retryWrites=true&w=majority')
const schema = mongoose.Schema
const loginSchema = new schema({
    email: { type: String },
    password: { type: String },
    role:{type:String,required:true}
})
let loginData=mongoose.model('loginData',loginSchema)
module.exports=loginData