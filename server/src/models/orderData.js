const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jdjithin:maitexa2255@cluster0.me79b0j.mongodb.net/homeSolutionDB?retryWrites=true&w=majority')
const schema = mongoose.Schema
const orderSchema = new schema({
    orderId: { type: String, required: true },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    fullName: { type: String, required: true },
    houseName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true }
})

let orderData = mongoose.model('orderData', orderSchema)
module.exports = orderData