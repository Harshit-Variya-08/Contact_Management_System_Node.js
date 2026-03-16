import mongoose from 'mongoose';

let dbConnect = ()=>
    {
        mongoose.connect("mongodb://localhost:27017/Contact_Database").then(()=>
        {
            console.log("Database Connected...");
        })
    }



export default dbConnect;