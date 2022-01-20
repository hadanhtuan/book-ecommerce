const Books=require('../../models/book')
const bookService=require('./book.service') 

//[GET] api/book/all
async function getAllBooks (req, res, next) {
    try {
        let allBooks=await Books.find({})
        res.status(200).json({
            error: false,
            message: "A list of all books",
            Books: allBooks,
        })
    }
    catch(error) {
        res.status(500).json({
            error: true,
            message: "Loading failed :((",
        })
    }
}

//[GET] api/book/:id
async function getSingleBook(req, res, next) {
    try {
        let singleBook=await Books.findOne({id:req.params.id})
        res.status(200).json({
            error: false,
            message: `Loading book ${singleBook.title} success`,
            Book: singleBook,
        })
    }
    catch(error) {
        res.status(500).json({
            error: true,
            message: "Loading failed :((",
        })
    }
}

module.exports = {
    getAllBooks,
    getSingleBook,
}
