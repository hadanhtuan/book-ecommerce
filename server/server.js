const express = require('express')
const app = express()
var cors = require('cors')
 
app.use(cors())

const path = require('path')
const ErrorResponse = require("./utils/errorResponse");

const bodyParser = require('body-parser')

app.use(express.json({  limit: '30mb', extended: true }));
app.use(express.urlencoded({  limit: '30mb', extended: true }));

app.use(express.static('public'))

app.listen('3000',()=>{console.log('server is running')})


const api = require('./src/api')
//routing
app.use('/api/', api)


//error handle
app.use((err, req, res, next) => {
    let error = { ...err };
  
    error.message = err.message;
  
 
    console.log(error.message);
  
    res.status(error.statusCode || 500).json({
      error: true,
      message: error.message || "Server Error",
    });
  })

//connect to database
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://book-ecommerce:book-ecommerce@cluster0.sofia.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


