const express = require("express");
const auth = require("../middleware/auth")
const mainRouter = new express.Router();


const multer = require('multer')
var md5 = require("md5");
const mime = require('mime')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        if (file.fieldname === "file") {
            cb(null, md5(Date.now()) + "." + mime.getExtension(file.mimetype));
        }
    },
});


const upload = multer({
    storage: storage,
}).fields(
    [
        {
            name: 'file', maxCount: 1
        }
    ]
);



var storage_1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        if (file.fieldname === "file") {
            cb(null, Date.now() + '-' + file.originalname);
        }
    },
});


const upload_1 = multer({
    storage: storage_1,
}).fields(
    [
        {
            name: 'file', maxCount: 1
        }
    ]
);



const authController = require('../controller/authController');
const userController = require('../controller/userController');
const contactController = require('../controller/contactController');

mainRouter.post('/login', authController.login)

mainRouter.post('/users',  userController.store)
mainRouter.get('/users', auth("Users", "Read"), userController.fetch)
mainRouter.put('/users', auth("Users", "Read"), userController.update)

mainRouter.post('/contacts', auth("Users", "Read"), contactController.store)
mainRouter.get('/contacts', auth("Users", "Read"), contactController.fetch)


module.exports = mainRouter;
