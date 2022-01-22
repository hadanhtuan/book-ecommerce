const router = require('express').Router()
const bookController = require('./book.controller')

router.get('/all', bookController.getAllBooks) //api/book/all
router.get('/filter/:category', bookController.findBooksByCategory) //api/book/filter/:category
router.get('/:id', bookController.getSingleBook) //api/book/:id

module.exports = router;




