const userService = require('./user.service')
const ErrorResponse = require("../../../utils/errorResponse");

//[GET] api/user/orders
async function getOrders (req, res, next) {
    try {
        let DTO=await userService.getOrders(req.userId);
        if(DTO.error) 
        {
            return next(new ErrorResponse(DTO.message, 500));
        }
        res.status(200).json(DTO);
    }
    catch(err) {
        next(new ErrorResponse(err.message, 500));
    }
}

//[POST] api/user/orders
async function postOrders (req, res, next) {
    try {
        let DTO=await userService.postOrders(req.userId, req.body.orders, req.body.totalPrice);
        if(DTO.error) 
        {
            return next(new ErrorResponse(DTO.message, 500));
        }
        res.status(200).json(DTO);
    }
    catch(err) {
        next(new ErrorResponse(err.message, 500));
    }
}

//[GET] api/user/
async function getUser (req, res, next) {
    try {
        let DTO=await userService.getUser(req.userId);
        if(DTO.error) 
        {
            return next(new ErrorResponse(DTO.message, 500));
        }
        res.status(200).json(DTO);
    }
    catch(err) {
        next(new ErrorResponse(err.message, 500));
    }
}

module.exports = {
    getOrders,
    postOrders,
    getUser
}
