import express from "express"
import bodyParser from "body-parser"
import register from "../Controllers/register.js"


const router = express.Router()
router.use(bodyParser.json())


router.post("/register", register)


export default router