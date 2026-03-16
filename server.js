import express from 'express';
const app = express();
import dbConnect from './config/dbConnection.js';
import dotenv from 'dotenv';  // For accessing value from .env file to here..
dotenv.config();

app.use(express.json());
dbConnect();   // Connecting with database 

import Contact_router from './Routes/contactRouter.js';
import User_router from './Routes/userRouter.js'
app.use("/api/contacts",Contact_router);   //it will work as middleware
app.use("/api/users",User_router); 



app.listen(process.env.PORT,()=>
{
    console.log(`Server Running on port ${process.env.PORT}`);
})