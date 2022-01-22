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

async function postOrders(userId, reqOrders){
    try {
        let orders = await Orders.findOne({ userId });

        if(!orders) {  //nếu chưa có userId thì lưu vào
            const newOrders = new Orders({
                userId,
                books: reqOrders
            });
            await newOrders.save();
        }  

        //nếu có rồi thì lưu ngay(ghi đè thêm) vào document đó
        else {
            let oldOrders = orders.books;

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

            orders.books = reqOrders  //phải thay đổi luôn cả biến mảng. Phải dùng reqOrders vì nếu dùng oldOrders thì vẫn sẽ không save
            await orders.save();
            console.log(reqOrders)
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

module.exports= {
    getOrders,
    postOrders
}
