const User = require('../model/userModel')
const bcrypt = require('bcryptjs') // module which is used to encrypt the password (encrypted password can validate)

const httpStatusCodes = require ('http-status-codes')
const { createAccessToken } = require('../util/token')
const jwt = require('jsonwebtoken')

const authController = {
    register: async (req,res) => {
        try {
            const { firstName,lastName,email,mobile,password } = req.body

            const encPass = await bcrypt.hash(password, 10) // hash method has 2 parameters ( input, size 10byte) // hash(password , salt (generate new encrypted password for single(one) password))

            const newUser = await User.create({
                firstName,
                lastName,
                email,
                mobile,
                password: encPass
            })

            res.json( {msg: "User registered successfully" , user: newUser })
            //res.json('register')
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    login: async (req,res) => {
        try {
            const { email, password } = req.body;

            // validating user email
            let extUser = await User.findOne({ email })
                if(!extUser)
                    return res.status(400).json({ msg: "User doesn't exists"})

            // password compare
            const isMatch = await bcrypt.compare(password,extUser.password) //compare the password with existing password
                if(!isMatch)
                    return res.status(400).json({ msg: "Password doesn't match"})

            //check user active or not
            // if(!extUser.isActive) 
            //     return res.status(400).json({ msg: "Sorry, your account is blocked, contact admin"})

            const accessToken = createAccessToken({ _id: extUser._id })

            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                signed: true,
                path: `/ats/v1/auth/authToken`,
                maxAge: 1 * 24 * 60 * 60 * 1000 //one day //expiry time of cookie
            });

                res.json({ token: accessToken, msg: "Login Successful"})
                //res.json({ data: extUser})
                //res.json( { data: req.body})
           
        } catch (err) {
            return res.status(500).json({ msg: err.message})
        }
    },
    logout: async (req,res) => {
        try {
            res.clearCookie('accessToken', { path: `/ats/v1/auth/authToken`})
                res.status(200).json({ msg: "Logout successfully"})
            //res.json( { msg: 'login called'})
        } catch (err) {
            return res.status(500).json({ msg: err.message})
        }
    },
    authtoken: async (req,res) => {
        try {
            const token = req.signedCookies.accessToken; //signed cookies => secured cookies

            if(!token)
                return res.status(400).json({ msg: "session Expired... login again.."})

            //reverse login to validate the user id
            jwt.verify(token, process.env.ACCESS_SECRET, (err,data) => {
                // err => server error, data => output response
                if(err) return res.status(400).json({ msg: "Invalid Access token.."})

                //regenerated access token
                const accessToken = createAccessToken({ _id: data._id})
                res.json({ accessToken })
            })

            //res.json( { msg: 'auth token called'})
        } catch (err) {
            return res.status(500).json({ msg: err.message})
        }
    },
    resetPass: async (req,res) => {
        try {
            res.json( { msg: 'reset password called'})
        } catch (err) {
            return res.status(500).json({ msg: err.message})
        }
    }
}

module.exports = authController