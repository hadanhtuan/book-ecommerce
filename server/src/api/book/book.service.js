const Books=require('../../models/book')

async function getAllBooks(){
    try {
        let allBooks=await Books.find()
        return {
            error: false,
            message: "Danh sách tất cả các quyển",
            Books: allBooks,
        }
    }
    catch{(error)=> {
            return{
                error: true,
                message: 'Tải trang lỗi, vui lòng thử lại'
            }
        }
    }
}

async function getSingleBook(id){
    try{
        let singleBook=await Books.findById(id);
        //Nếu không tìm thấy sách
        if(!singleBook){
            return {
                error: false,
                message: 'Không tìm thấy sách'
            }
        }
        return {
            error: false,
            message: `Hiển thị sách ${singleBook.title} thành công`,
            Book: singleBook,
        }
    }
    catch{(error) => {
            return{
                error: true,
                message: 'Tải trang lỗi, vui lòng thử lại.'
            }
        }
    }
}

module.exports= {
    getAllBooks,
    getSingleBook,
}

