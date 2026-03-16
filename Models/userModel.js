import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required: [true,"Please add username"]
    },
    email:{
        type : String,
        required: [true, "Please add user email "],
        unique: [true,"Email already taken"]
    },
    password:{
        type: String,
        required: [true,"Please add password"]
    }
},{
    timestamps:true
});

const userModel = mongoose.model("users",userSchema);
export default userModel;