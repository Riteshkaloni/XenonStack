const express = require('express')
const cors = require('cors')
const fs = require("fs");
const https = require("https");
const http = require("http");
const path = require('path')

const app = express()
const port = process.env.PORT || 5113

const mainRouter = require('./routes/index.js')

app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(express.json())

app.use(mainRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})