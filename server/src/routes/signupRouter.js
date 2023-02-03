const express = require('express')
const signupRouter = express.Router()
const bcrypt = require('bcryptjs')
const loginData = require('../models/loginData')
const customerData = require('../models/customerData')
const professionalData = require('../models/professionalData')


//customer signup api
signupRouter.post('/customerSignup', async (req, res) => {
    const { fullName, email, password, city, district, phone, whatsapp, pincode } = req.body
    try {
        const hashed = await bcrypt.hash(password, 10)
        if (!hashed) {
            return res.status(400).json({ message: "password hashing error!!!" })
        } else {
            const oldUser = await loginData.findOne({ email })
            if (oldUser) {
                return res.status(400).json({ message: "user already exists" })
            } else {
                const login = await loginData.create({ email, password: hashed, role: "customer" })
                if (!login) {
                    return res.status(400).json({ message: "something went wrong" })
                } else {
                    const signup = await customerData.create({ loginId:login._id,fullName, city, district, phone, whatsapp, pincode })
                    if (!signup) {
                        return res.status(400).json({ message: "something went wrong" })
                    } else {
                        return res.status(400).json({ message: "customer signup successful" })
                    }
                }
            }

        }
    } catch (error) {
        console.log(error);
        return res.status(404).json({ERROR: error})
       
    }
})


//professional signup api
signupRouter.post('/professionalSignup', async (req, res) => {
    const { fullName, email, password, occupation, experience, city, district, phone, whatsapp, pincode } = req.body
    const hashed = await bcrypt.hash(password, 10)
    try {
        if (!hashed) {
            return res.status(400).json({ message: "password hashing error" })
        } else {
            const oldUser = await loginData.findOne({ email })
            if (oldUser) {
                return res.status(400).json({ message: "user already exists" })
            } else {
                const login = await loginData.create({ email, password: hashed, role: "professional" })
                if (!login) {
                    return res.status(400).json({ message: "something went wrong" })
                } else {
                    const signup = await professionalData.create({loginId:login._id, fullName, occupation, experience, city, district, phone, whatsapp, pincode })
                    if (!signup) {
                        return res.status(400).json({ message: "something went wrong" })
                    } else {
                        return res.status(200).json({ message: "professional signup successful" })
                    }
                }
            }
        }
    } catch (error) {
        return res.status(404).json({ERROR: error})
    }
})






module.exports = signupRouter