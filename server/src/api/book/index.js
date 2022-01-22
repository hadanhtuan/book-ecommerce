const router = require('express').Router()
const bookController = require('./book.controller')

router.get('/all', bookController.getAllBooks) //api/book/all
router.get('/:id', bookController.getSingleBook) //api/book/:id

module.exports = router;