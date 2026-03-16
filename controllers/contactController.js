// @description : Get all Contacts
// @route : GET /api/contacts
// @ access : Public
export const getContacts = (req, resp) => {
  resp.status(200).json({ message: "Get all contacts" });
};

// @description : Create Contact
// @route : POST /api/contacts
// @ access : Public
export const createContact = (req, resp) => {
  resp.status(201).json({ message: "Create a contact" });
};

// @description : Get individual Contact
// @route : GET /api/contacts/:id
// @ access : Public

export const getContact = (req, resp) => {
  resp.json({ message: `Get contact for ${req.params.id}` });
};

// @description : Update Contact
// @route : PUT /api/contacts/:id
// @ access : Public
export const updateContact = (req, resp) => {
  resp.json({ message: `Update the contact ${req.params.id}` });
};

// @description : Delete Contact
// @route : DELETE /api/contacts/:id
// @ access : Public
export const deleteContact = (req, resp) => {
  resp.json({ message: `Delete the contact ${req.params.id}` });
};
