var jwt = require("jsonwebtoken");
var Book = require("../../models/book");

async function getAllBooks(){
    try {
        let allBooks=await Book.find()
        return {
            error: false,
            message: "Danh sách tất cả các quyển",
            books: allBooks,
        }
    }
    catch(err) {
        return{
            error: true,
            message: 'Tải trang lỗi, vui lòng thử lại'
        }
    }
}

async function getSingleBook(id){
    try{
        let singleBook=await Book.findById(id);
        //Nếu không tìm thấy sách
        if(!singleBook){
            return {
                error: true,
                message: 'Không tìm thấy sách'
            }
        }
        return {
            error: false,
            message: 'Hiển thị sách ${singleBook.title} thành công',
            book: singleBook,
        }
    }
    catch(err){
        return{
            error: true,
            message: 'Tải trang lỗi, vui lòng thử lại.'
        }
    }
}


async function addBook(body) {
    const {title, coverImage, coverImageType, price, description, category} = body;


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
  addBook,
  getAllBooks,
  getSingleBook
};