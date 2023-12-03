import  express  from "express";
import { addForm, getForm, getUsers } from "../controllers/user.controller";

const router = express.Router()

router.post('/addForm',addForm)
router.get('/getusers',getUsers)

export default router