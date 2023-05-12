// get the inputs using model
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require:[true, "name field must be filled"],
        trim: true
    },
    lastName: {
        type: String,
        require:[true, "name field must be filled"],
        trim: true
    },
    email: {
        type: String,
        require:[true, "email field must be filled"],
        trim: true
    },
    password: {
        type: String,
        require:[true, "password field must be filled"],
        trim: true
    },
    mobile: {
        type: String,
        require:[true, "mobile field must be filled"],
        trim: true,
        unique: [true, "mobile already exists"]
    }
},{
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)