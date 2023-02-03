const express = require('express')
const loginRouter = express.Router()
const bcrypt = require('bcryptjs')
const loginData = require('../models/loginData')
const jwt=require('jsonwebtoken')


loginRouter.post('/', async (req, res) => {
    const { email, password } = req.body
    try {
        const loginDetails = await loginData.findOne({ email })
        if (!loginDetails) {
            return res.status(400).json({ message: "Inavalid Email" })
        } else {
            const compareHash = bcrypt.compare(password, loginDetails.password)
            if (compareHash == false) {
                return res.status(400).json({ message: "Invalid password" })
            } else {
                const token=jwt.sign({loginId:loginDetails._id},'secret_2255',{expiresIn:"1h"})
                return res.status(200).json({
                    success: true,
                    error: false,
                    token:token,
                    role: loginDetails.role,
                    message: "Login successfull"
                })
            }
        }
    } catch (error) {
        return res.status(400).json({ ERROR: error })
    }
})








module.exports = loginRouter