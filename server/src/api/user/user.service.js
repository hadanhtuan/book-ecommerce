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

async function postOrders(userId, reqOrders, totalPrice){
    try {
        let orders = await Orders.findOne({ userId });
        console.log(totalPrice)
        if(!orders) {  //nếu chưa có userId thì lưu vào
            const newOrders = new Orders({
                userId,
                ordersList: reqOrders,
                totalPrice
            });
            await newOrders.save();
        }  

        //nếu có rồi thì lưu ngay(ghi đè thêm) vào document đó
        else {
            let oldOrders = orders.ordersList;

            for(let i=0; i< oldOrders.length; i++)                    
            {
                let chk = false;
                for(let j=0; j< reqOrders.length; j++)                    
                    if(oldOrders[i]._id == reqOrders[j]._id)
                    {
                        chk = true;
                        reqOrders[j].quantity+=oldOrders[i].quantity;
                        break;
                    }
                if(!chk) { reqOrders.push(oldOrders[i]) } 
            }

            orders.ordersList = reqOrders  //phải thay đổi luôn cả biến mảng. Phải dùng reqOrders vì nếu dùng oldOrders thì vẫn sẽ không save
            orders.totalPrice+=totalPrice
            await orders.save();
            console.log(orders.totalPrice)
        }
        return {
            error: false,
            message: "Lưu thành công"
        }
    }   

    catch(err) {
        return {
            error: true,
            message: err.message,
        }
    }
}

async function getUser(userId) {
    try {
        const user = await User.findById(userId)
        if(!user)
        {
            return {
                error: true,
                message: "Khong tim thay user"
            }
        }
        
        return {
            error: false,
            message: "Tim thay user",
            _id: user._id,
            email: user.email,
            role: user.role
        }
    }
    catch(err) {
        return {
            err: true,
            message: err.message
        }
    }
}

module.exports= {
    getOrders,
    postOrders,
    getUser
}
