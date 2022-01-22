const userService = require('./user.service')
const ErrorResponse = require("../../../utils/errorResponse");

//[GET] api/user/orders
async function getOrders (req, res, next) {
    let DTO=await userService.getOrders();
    if(DTO.error){
        return next(new ErrorResponse(DTO.message, 500));
    }
    res.status(200).json(DTO)
}

module.exports = {
    getOrders
}
