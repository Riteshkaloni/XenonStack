require("../connection/index")

const md5 = require("md5");
const Users = require("../models/Users");
const { default: mongoose } = require("mongoose");
const Contacts = require("../models/Contacts");



exports.fetch = async function (req, res) {
    try {
        let data = await Contacts.find({created_by : req.user._id})
        res.status(200).send({ "status": "OK", data: data, error: 0 })
    } catch (e) {
        res.status(500).send({ "status": "Failed", "message": e.message })
    }
};


exports.store = async function (req, res) {
    try {

        const now = new Date();
        const create = new Contacts({...req.body , ["created_by"] : req.user._id})
        await create.save()
        res.status(200).send({ error: 0, "status": "OK" })

    } catch (e) {
        res.status(500).send({ error: 1, "status": "Failed", "message": e.message })
    }
};