const Book=require('../../models/book')
const bookService=require('./book.service') 
const ErrorResponse = require("../../../utils/errorResponse");

//[GET] api/book/all
async function getAllBooks (req, res, next) {
    let DTO=await bookService.getAllBooks();
    if(DTO.error){
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO)
}

//[GET] api/book/:id
async function getSingleBook(req, res, next){
    let DTO=await bookService.getSingleBook(req.params.id);
    if(DTO.error){
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO)
}

module.exports = {
    getAllBooks,
    getSingleBook
}

