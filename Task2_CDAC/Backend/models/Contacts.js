const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');


const schema = new Schema({

    
    
    name : {type: String, default: null, required: false} ,
    phone : {type: String, default: null, required: false} ,
    email : {type: String, default: null, required: false} ,
    message : {type: String, default: null, required: false} ,

    created_at: { type: Date, default: Date.now },
    
    created_by : { type: Schema.Types.ObjectId, ref: 'Users', required: true },

    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null },

});



const Contacts = mongoose.model("Contacts", schema);

module.exports = Contacts;
