import contactModel from "../Models/contactMode.js";
// @description : Get all Contacts
// @route : GET /api/contacts
// @ access : Private
export const getContacts = async(req, resp) => {
    const data = await contactModel.find({user_id:req.user.id});
    console.log(data);
  resp.status(200).json(data);
};

// @description : Create Contact
// @route : POST /api/contacts
// @ access : Private
export const createContact = async(req, resp) => {
    let {name,email,phone} = req.body;
        const data = await contactModel.create({
            name,
            email,
            phone
        })
    // console.log("Data is ",data);
  resp.status(201).json({ message: "Created." , data : data});
};

// @description : Get individual Contact
// @route : GET /api/contacts/:id
// @ access : Private

export const getContact = async(req, resp) => {
    const data = await contactModel.findById(req.params.id);
  resp.json({ message: `Get contact for ${req.params.id}` ,
                data : data});
};

// @description : Update Contact
// @route : PUT /api/contacts/:id
// @ access : Private
export const updateContact =async (req, resp) => {
    const data = await contactModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
  resp.json({ message: `Update the contact ${req.params.id}` , data : data});
};

// @description : Delete Contact
// @route : DELETE /api/contacts/:id
// @ access : Private
export const deleteContact = async (req, resp) => {
    const data = await contactModel.findByIdAndDelete(req.params.id,{new:true});

  resp.json({ message: `Delete the contact ${req.params.id}`, deleted_Data : data });
};
