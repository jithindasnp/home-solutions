const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jdjithin:maitexa2255@cluster0.me79b0j.mongodb.net/homeSolutionDB?retryWrites=true&w=majority')
const schema = mongoose.Schema
const professionalSchema = new schema({
    loginId:{type:schema.Types.ObjectId,ref:"loginData"},
    fullName: { type: String },
    profileImg:{type:String},
    email: { type: String },
    password: { type: String },
    occupation: { type: String },
    experience: { type: String },
    city: { type: String },
    district: { type: String },
    phone: { type: String },
    whatsapp: { type: String },
    pincode: { type: String }
})
let professionalData = mongoose.model('professionalData', professionalSchema)
module.exports = professionalData