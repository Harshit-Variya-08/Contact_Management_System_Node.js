import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    // user_id:{
    //     type : mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref : "users"
    // },
    name : {
        type:String,
        required:[true,"Please add name for contact"]
    },
    email: {
        type: String,
        required: [true,"Please add email for contact"]
    },
    phone: {
        type:String,
        required: [true, "PLease add phone numbers"]
    },

},{
    timstamps:true,
})

const contactModel = mongoose.model("contactCollection",contactSchema);
export default contactModel;