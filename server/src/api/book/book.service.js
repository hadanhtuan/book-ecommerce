const Book=require('../../models/book')

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
            message: `Hiển thị sách ${singleBook.title} thành công`,
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

async function findBooksByCategory(type){
    try{
        let listBooks=await Book.find({category:type});
        if(listBooks.length==0){
            return {
                error: true,
                message: 'Không tìm thấy sách thuộc thể loại cần tìm'
            }
        }
        return {
            error: false,
            message: `Danh sách các quyển thuộc thể loại cần tìm`,
            books: listBooks
        }
    }
    catch(err){
        return{
            error: true,
            message: err.message
        }
    }
}

module.exports= {
    getAllBooks,
    getSingleBook,
    findBooksByCategory
}

