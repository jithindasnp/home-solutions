const express = require('express')
const authCheck = require('../middleware/authCheck')
const professionalData = require('../models/professionalData')
const professionalRouter = express.Router()

//professional view by location(city)
professionalRouter.get('/view',authCheck, async (req, res) => {
    const { city, service } = req.query
    try {
        const prof = await professionalData.aggregate([
            {
                '$match': {
                    'city': city,
                    'occupation': service
                }
            }
        ])
        if (!prof) {
            return res.status(400).json({ message: "error" })
        } else {
            return res.status(200).json(prof)
        }
    } catch (error) {
        return res.status(400).json({ ERROR: error })
    }
})



module.exports = professionalRouter