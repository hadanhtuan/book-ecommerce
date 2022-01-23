const userService = require('./user.service')
const ErrorResponse = require("../../../utils/errorResponse");

//[GET] api/user/orders
async function getOrders (req, res, next) {
    let DTO=await userService.getOrders(req.userId);
    if(DTO.error){
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO)
}

async function postOrders (req, res, next) {
    let DTO=await userService.postOrders(req.userId, req.body.orders, req.body.totalPrice);
    if(DTO.error){
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO)
}

async function getUser (req, res, next) {
    let DTO=await userService.getUser(req.userId);
    if(DTO.error){
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO)
}

module.exports = {
    getOrders,
    postOrders,
    getUser
}
