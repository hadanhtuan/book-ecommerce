const Books=require('../../models/book')

async function getAllBooks(){
    try {
        let allBooks=await Books.find()
        return {
            error: false,
            message: "A list of all books",
            Books: allBooks,
        }
    }
    catch{(error)=> {
        return{
            error: true,
            message: 'Loading failed :(('
        }
    }}
}

async function getSingleBook(id){
    try{
        let singleBook=await Books.findById(id);
        return {
            error: false,
            message: `Loading book ${singleBook.title} success`,
            Book: singleBook,
        }
    }
    catch{(error)=> {
        return{
            error: true,
            message: 'Loading failed :(('
        }
    }}
}

module.exports= {
    getAllBooks,
    getSingleBook,
}

