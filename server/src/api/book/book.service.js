var jwt = require("jsonwebtoken");
var Book = require("../../models/book");

async function addBook(body) {
    const {title, coverImage, coverImageType, price, description, category} = body;

    //const coverImageBuffer = Buffer.from(coverImage, 'base64');

    const newBook = new Book({
        title,
        coverImage,
        coverImageType,
        price,
        description,
        category
    });

    try {
        await newBook.save();
        return {
            error: false,
            message: "Tạo sách thành công"
        }

    }
    catch (err) {
        return {
            error: true,
            message: err.message,
        }
    }
}

module.exports = {
  addBook
};