const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

require('dotenv').config({path: "./.env"})
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

//404 not found
app.use((req, res) => {
    console.log(__dirname);
    res.status(404).sendFile(path.join(__dirname, '/public/404.html'))
})

//error handle
app.use((err, req, res, next) => {
    let error = { ...err };
  
    error.message = err.message;
  
    res.status(error.statusCode || 500).json({
      error: true,
      message: error.message || "Server Error",
    });
  })

//connect to database
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/book-ecommerce',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})