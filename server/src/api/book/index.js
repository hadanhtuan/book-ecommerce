const router = require('express').Router()
const bookController = require('./book.controller')

router.get('/all', bookController.getAllBooks) //api/book/all
router.get('/:id', bookController.getSingleBook) //api/book/:id
router.get('/:category', bookController.findBookByCategory) //api/book/:category

module.exports = router;




