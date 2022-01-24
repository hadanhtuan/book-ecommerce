const express = require('express');
const authService = require('./auth.service')
const ErrorResponse = require("../../../utils/errorResponse");

//[POST] api/auth/register
async function register(req, res, next) {
    try {
        let DTO = await authService.register(req.body);
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

//[POST] api/auth/login
async function login(req, res, next) {
    try {
        let DTO = await authService.login(req.body);
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

//[POST] api/auth/forgot-password
async function forgotPassword(req, res, next) {
    try {
        let DTO = await authService.forgotPassword(req.body);
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
//[POST] api/auth//reset-password/:resetToken
async function resetPassword(req, res, next) {
    try {
        let DTO = await authService.resetPassword(req.body);
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
    register,
    login,
    forgotPassword,
    resetPassword
}


