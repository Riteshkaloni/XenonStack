const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
const md5 = require("md5");


const userSchema = new Schema({
    
    name: {
        type: String,
        required: false,
    },

    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    password: { type: String, required: false },

    tokens: [{ "token": { type: String, required: true } }],




});


userSchema.statics.findByCred = async (phone, password) => {
    try {
        const user_cond1 = await Users.findOne({ phone: phone, password: md5(md5(password)) })
        if (!user_cond1) {
            return 1
        } else {
            return user_cond1
        }
    } catch (e) {
        console.log(e)
        throw new Error(e.message)
    }
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ phone: user.phone }, 'interntest@interntest', { expiresIn: '20d' })

    await Users.findOneAndUpdate(
        { "phone": user.phone },
        { "$push": { "tokens": { "token": token } } })
    return token;
}

userSchema.index({ phone: 1 }, { unique: true })
const Users = mongoose.model("Users", userSchema);

module.exports = Users;
