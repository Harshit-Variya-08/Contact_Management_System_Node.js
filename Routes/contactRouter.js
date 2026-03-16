import express from 'express';
import { createContact, deleteContact, getContact, getContacts, updateContact } from '../controllers/contactController.js';
const app = express();

const router =  express.Router();

router.get("/",getContacts);       // For getting all contacts
router.get("/:id",getContact);    // For getting single contact
router.post("/",createContact)     // For Creating new contact
router.put("/:id",updateContact);  // For Updating the Contact
router.delete("/:id",deleteContact);// For Deleting the contact

export default router;