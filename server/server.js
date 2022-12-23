import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import routes from './routes';

const PORT = process.env.PORT || 3000 ;

// DB connection
const connectMongo = require('./config/mongo')
connectMongo();


// Routes
app.use('/api', routes);

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})