const Otps = require("../models/Otps");
const UserDevices = require("../models/UserDevices");
const Users = require("../models/Users");


exports.genLog = async (id , headers , process) =>{
    try{
        let create_user_logs = await UserDevices({
            "user_id" : id,
            "device_snap" : headers,
            "process" : process,
        });
        create_user_logs.save();
        return 1;
    }catch(e){
        return 0
    }
}

exports.genToken = async (username) =>{
    try{
        const usersToken = await Users.findByCred2(username)
        const token = await usersToken.generateAuthToken()
        return token;
    }catch(e){
        return 0
    }
}
exports.genTokenForAuthenticatedUser = async (username,otp) =>{
    try{
        const usersToken = await Users.findByCred(username,otp)
        const token = await usersToken.generateAuthToken()
        return token;
    }catch(e){
        return 0
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
exports.createOtp =   async (phone) => {
    let item = [];
    item['phone'] = phone
    item['otp'] = getRandomIntInclusive(100000, 999999)
    const create = new Otps(item)
    try {
        await create.save()
        console.log(item.otp)
        return item.otp
    } catch (e) {
        return 0
    }
};