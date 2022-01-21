const express = require('express');
const bookService = require('./book.service')
const ErrorResponse = require("../../../utils/errorResponse");

async function addBook(req, res, next) {
    let DTO = await bookService.addBook(req.body);
    if(DTO.error) 
    {
        return next(new ErrorResponse(DTO.message, 400));
    }
    res.status(200).json(DTO);
}

module.exports = {
    addBook
}