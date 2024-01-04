const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect("<mongodb string>", {
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to db'))
    .catch(e => {
        console.log(e)
        // return
    }
    );
