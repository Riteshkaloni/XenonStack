var jwt = require('jsonwebtoken');
const Users = require('../models/Users');

const auth = (auth_role, auth_operation) => async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace('Bearer ', '')
        const decode = jwt.verify(token, "interntest@interntest")
        const user = await Users.findOne({ phone: decode.phone, 'tokens.token': token })
        if (!user) {
            console.log("Err")
            res.sendStatus(403)
            res.status(403).send({ message: "Forbidden Ops1" })
            return
        } else {
            req.user = user
            next()
        }
    } catch (e) {
        console.log(e)
        res.status(403).send({ message: "Forbidden Wh" })
        return
    }
}
module.exports = auth