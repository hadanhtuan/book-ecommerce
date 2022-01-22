const mongoose=require('mongoose')
const Schema=mongoose.Schema

const bookSchema=new Schema({
    title: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    coverImageType: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    description: {
        type: String,
        require: true
    }
    
})

bookSchema.virtual('coverImagePath').get(function() {  // tạo thêm thuộc tính ảo coverImagePath cho model với chức năng trả về link ảnh
    if (this.coverImage != null) {
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }
})  //bên FE chỉ việc thêm book.coverImagePath vào thuộc tính src của tag img

const Book=mongoose.model('Book', bookSchema)
module.exports=Book









