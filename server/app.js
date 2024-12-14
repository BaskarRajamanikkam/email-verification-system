//Third party files
const express = require('express');
const error = require('./middlewares/error');
const dotenv = require('dotenv');

const cors = require('cors');
const bodyParser = require('body-parser');



// express app initialize
const app = express();

//dotenv config
dotenv.config();



const corsOptions ={
    origin: 'http://localhost:5173', // Specify the origin you want to allow
    credentials: true, // Allow credentials (cookies, authorization headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};
//third party file use for app server
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use('/api/v1',require('./routes/index'));


//error middleware calling
app.use(error);


// export express app 
module.exports = app;