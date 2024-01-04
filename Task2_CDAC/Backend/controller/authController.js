require("../connection/index")

const { default: mongoose } = require("mongoose");
const Users = require("../models/Users");

exports.login = async (req, res) => {
    try {
        const usersToken = await Users.findByCred(req.body.phone, req.body.password)
        if (usersToken == 1) {
            res.status(200).send({ error: 1, "status": "Login Failed ! Mismatch Creds", })
        }
        if (usersToken == 2) {
            res.status(200).send({ error: 1, "status": "Login Failed ! Account Expired", })
        }
        else {
            const token = await usersToken.generateAuthToken()
            res.status(200).send({ error: 0, "status": "OK", "token": token, name: usersToken.name })
        }
    } catch (e) {
        console.log(e)
        res.status(500).send({ "status": 1, "message": e.messgae })
    }
}
