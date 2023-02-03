const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        //token from authorization
        const token = await req.headers.authorization.split(" ")[1]
        //decoding token+bearer
        const decodedToken = jwt.verify(token, 'secret_2255')

        req.userData = { loginId: decodedToken.loginId }
        next()
    } catch (error) {
       return res.status(401).json({
            message: "Authentication failed !!! please login",
            loginStatus:false
        })
    }
}