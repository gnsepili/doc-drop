import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

function dbConnect(){
    mongoose.connect(
        process.env.MONGODB_URL,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });

        const connection = mongoose.connection;
        connection.once('open', ()=>{
            console.log('DB connected successfully ✅');
        }).catch((err)=>{
            console.log('DB connection error ❌\n'+err.message)
        });
}

module.exports = dbConnect;