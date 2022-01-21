var jwt = require("jsonwebtoken");
var Book = require("../../models/book");

async function addBook(body) {
    const {title, price, description} = body;

    return {
        error: false,
        message: "Tạo sách thành công!",
        body: body
    }; 
}

module.exports = {
  addBook
};
