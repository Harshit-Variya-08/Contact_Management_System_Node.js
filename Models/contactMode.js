import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
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