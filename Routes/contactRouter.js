import express from 'express';
import { createContact, deleteContact, getContact, getContacts, updateContact } from '../controllers/contactController.js';
import validateToken from '../Middleware/validateToken.js';


const router =  express.Router();

router.get("/",validateToken,getContacts);       // For getting all contacts if token having
router.get("/:id",validateToken,getContact);    // For getting single contact if token having
router.post("/",validateToken,createContact)     // For Creating new contact if token having
router.put("/:id",validateToken,updateContact);  // For Updating the Contact if token having
router.delete("/:id",validateToken,deleteContact);// For Deleting the contact if token having

export default router;