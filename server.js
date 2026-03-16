import express from 'express';
const app = express();

import dotenv from 'dotenv';  // For accessing value from .env file to here..
dotenv.config();



import Contact_router from './Routes/contactRouter.js';
app.use("/api/contacts",Contact_router);   //it will work as middleware

app.listen(process.env.PORT,()=>
{
    console.log(`Server Running on port ${process.env.PORT}`);
})