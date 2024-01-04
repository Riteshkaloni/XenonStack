require("../connection/index")

const md5 = require("md5");
const Users = require("../models/Users");
const { default: mongoose } = require("mongoose");



//
exports.store = async function (req, res) {
  const fromdate = new Date();

  try {

    let obj = {
      ['name']: req.body.name, 
      ['phone']: req.body.phone, 
      ['email']: req.body.email, 
      ['password']: md5(md5(req.body.password)), 
    }

    const create = new Users(obj)
    await create.save()
    res.status(201).send({ "status": "Success", "message": "OK" , error_code : 0 })

  } catch (e) {
    console.log(e)
    res.status(500).send({ "status": "Failed", "message": e.message })
  }
};
exports.fetch = async function (req, res) {
  try {
    let data;
    data = await Users.findOne({ _id: req.user._id, deleted_at: null }).select("-tokens")
    res.status(200).send({ "status": "OK", data: data, error: 0 })
  } catch (e) {
    res.status(500).send({ "status": "Failed", "message": e.message })
  }
};


exports.update = async function (req, res) {
  try {
    let data = await Users.findByIdAndUpdate( {_id : req.user._id} , req.body , {new:true} );
    res.status(200).send({ "status": "OK", error: 0 })
  } catch (e) {
    console.log(e)
    res.status(500).send({ "status": "Failed", "message": e.message })
  }
};
