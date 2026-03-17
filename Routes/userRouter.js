import express from 'express';
import { currentUser, loginUser, registerUser } from '../controllers/userController.js';
import validateToken from '../Middleware/validateToken.js';
const router = express.Router();

router.post("/register",registerUser)    // /api/users/register

router.post("/login",loginUser)         // /api/users/login
router.get("/current",validateToken,currentUser)  // /api/users/current

export default router;