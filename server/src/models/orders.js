const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ordersSchema=new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'User',                        
        required: true
    },
    books: {
        type: Array,   // [ { bookId, quantity} ]
        required: true
    }
    
})

const Orders=mongoose.model('Orders', ordersSchema)
module.exports=Orders


/*  
Orders: 
    {
        userId: '12asd23das!22',
        books: [ {'1234', 2}, {'2134', 3}, {'5674', 1} ]
    },
    {   
        userId: '33drs@09wd0.1',
        books: [ {'1234', 2}, {'2134', 3}, {'5674', 1} ]
    }
*/







