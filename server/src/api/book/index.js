const authController = require('./book.controller.js')
const router = require('express').Router()

const { checkAdminPermission } = require('../../middleware/authMiddleware');
  
router.post('/new', checkAdminPermission, authController.addBook);  

module.exports = router