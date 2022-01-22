const express = require('express');
const authService = require('./auth.service')
const ErrorResponse = require("../../../utils/errorResponse");

async function register(req, res, next) {
    let DTO = await authService.register(req.body);
    if(DTO.error) 
    {
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO);
}

async function login(req, res, next) {
    let DTO = await authService.login(req.body);
    if(DTO.error) 
    {
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO);
}

async function forgotPassword(req, res, next) {
    const DTO = await authService.forgotPassword(req.body);

    if(DTO.error)
    {
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO);
}

async function resetPassword(req, res, next) {
    const DTO = await authService.resetPassword(req.body, req.params.resetToken);

    if(DTO.error)
    {
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO);
}

module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword
}


