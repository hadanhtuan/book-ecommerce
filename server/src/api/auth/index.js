const authController = require('./auth.controller.js')
const router = require('express').Router()


router.post('/register', authController.register)   //               /api//auth/register
router.post('/login', authController.login)      //               /api//auth/login
router.post('/forgot-password', authController.forgotPassword)   
router.post('/reset-password', authController.resetPassword)   

module.exports = router









