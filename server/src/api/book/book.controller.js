const bookService = require('./book.service')
const ErrorResponse = require("../../../utils/errorResponse");

//[POST] api/book/new
async function addBook(req, res, next) {
    try {
        let DTO = await bookService.addBook(req.body);
        if(DTO.error) 
        {
            return next(new ErrorResponse(DTO.message, 500));
        }
        res.status(200).json(DTO);
    }
    catch(err) {
        next(new ErrorResponse(err.message, 500))
    }
}

//[GET] api/book/all
async function getAllBooks (req, res, next) {
    try {
        let DTO=await bookService.getAllBooks();
        if(DTO.error) 
        {
            return next(new ErrorResponse(DTO.message, 500));
        }
        res.status(200).json(DTO);
    }
    catch(err) {
        next(new ErrorResponse(err.message, 500))
    }
}

//[GET] api/book/:id
async function getSingleBook(req, res, next){
    try {
        let DTO=await bookService.getSingleBook(req.params.id);
        if(DTO.error) 
        {
            return next(new ErrorResponse(DTO.message, 500));
        }
        res.status(200).json(DTO);
    }
    catch(err) {
        next(new ErrorResponse(err.message, 500))
    }
}

//[GET] api/book/filter/:category
async function findBooksByCategory(req, res, next){
    try {
        let DTO=await bookService.findBooksByCategory(req.params.category);
        if(DTO.error) 
        {
            return next(new ErrorResponse(DTO.message, 500));
        }
        res.status(200).json(DTO);
    }
    catch(err) {
        next(new ErrorResponse(err.message, 500))
    }
}

module.exports = {
    addBook,
    getAllBooks,
    getSingleBook,
    findBooksByCategory
}
