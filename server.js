const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDb = require('./db')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')

require('dotenv').config()

const PORT = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(fileUpload({
    useTempFiles: true //if file is not uploaded, it upload temporary file
}))

mongoose.Promise = global.Promise; //after we received data the file will store in mongodb

app.use(cookieParser(process.env.COOKIE_SECRET)) //TO enable the signed cookies (signed cookies -> no one can't access without this cookie_secret password)
app.use(cors())

app.use(`/ats/v1/`, require('./route/authRoute'))


app.all('*', (req,res,next) =>{
    res.status(404).json({ msg: `requested path not found, try '/ats/v1/`})
    next()
})

// Your code
if (process.env.NODE_ENV === "production") {
    const path = require("path");
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })
}
// Your code


app.listen(PORT, async () => {
    await connectDb(process.env.MONGO_URL)
    console.log(`server is started @ http://localhost:${PORT}`)
})