import express from 'express';
const app = express();

import dotenv from 'dotenv';  // For accessing value from .env file to here..
dotenv.config();

app.get("/api/contacts",(req,resp)=>
{
    resp.status(200).json({"Message":"Get all contacts"});
})

app.listen(process.env.PORT,()=>
{
    console.log(`Server Running on port ${process.env.PORT}`);
})