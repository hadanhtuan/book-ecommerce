const bookController = require('./book.controller.js')
const router = require('express').Router()

const { checkAdminPermission } = require('../../middlewares/authMiddleware');
  
router.get('/all', bookController.getAllBooks) //api/book/all
router.get('/:id', bookController.getSingleBook) //api/book/:id
router.post('/new', bookController.addBook);  

module.exports = router