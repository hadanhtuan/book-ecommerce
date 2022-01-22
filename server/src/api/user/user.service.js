var Orders = require("../../models/orders");
var User = require("../../models/user");
var jwt = require("jsonwebtoken");

async function getOrders(userId){
    try {
        let orders = await Orders.find({ userId });

        if(!orders){
            return {
                error: true,
                message: 'Không có dữ liệu'
            }
        }

        return {
            error: false,
            message: "Lấy danh sách đã mua thành công",
            orders
        }

    }
    catch {
        return {
            error: true,
            message: err.message,
        }
    }
}

module.exports= {
    getOrders
}
