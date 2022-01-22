const express = require('express');
const bookService = require('./book.service')
const ErrorResponse = require("../../../utils/errorResponse");

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

async function addBook(req, res, next) {
    let DTO = await bookService.addBook(req.body);
    
    if(DTO.error) 
    {
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO);
}

module.exports = {
    addBook,
    getAllBooks,
    getSingleBook
}