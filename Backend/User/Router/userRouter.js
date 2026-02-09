import express from "express";
import * as userController from "../Controller/userContorller.js"
import { decryptObj } from "../../Decryption/decrypt.js";
import { decryptRequest } from "../../services/response.js";

const router = express.Router();

router.route("/signUp").post(decryptRequest, userController.registration);
router.route("/signIn").post(userController.login);


export default router;