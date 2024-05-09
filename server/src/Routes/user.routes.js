import { Router } from "express";
import { singupUser } from "../Controllers/user.controller.js";

const router = Router()
router.route('/signup').post(singupUser)


export default router;