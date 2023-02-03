const express = require('express')
const orderData = require('../models/orderData')
const ordersRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
const authCheck = require('../middleware/authCheck')

ordersRouter.post('order',authCheck, async (req, res) => {
    const { date, timeSlot, fullName, houseName, phoneNumber, address } = req.body
    const orderId = uuidv4();
    try {
        const orderDetails = await orderData.create({ orderId, date, timeSlot, fullName, houseName, phoneNumber, address })
        if (!orderDetails) {
            return res.status(400).json({ message: "something went wrong!" })
        } else {
            return res.status(200).json({
                message: "order data added successfully",
                success: true,
                error: false,
                orderId: orderId
            })
        }
    } catch (error) {
        return res.status(400).json({ERROR:error})
    }
})




module.exports = ordersRouter