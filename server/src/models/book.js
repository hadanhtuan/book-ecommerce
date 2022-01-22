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
    },
    category: {
        type: String,
        require: true
    }
    
})



const Book=mongoose.model('Book', bookSchema)
module.exports=Book









