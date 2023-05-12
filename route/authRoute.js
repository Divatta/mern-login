const router = require('express').Router()
const authController = require('../controller/authController')
const auth = require('../middleware/auth')

router.post(`/auth/register`, authController.register)
router.post(`/auth/login`, authController.login)

router.get(`/auth/logout`, authController.logout)
router.get(`/auth/authToken`, authController.authtoken)

router.post(`/auth/password/reset`, authController.resetPass)

module.exports = router