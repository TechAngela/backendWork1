import express from "express"
import bodyParser from "body-parser";
import { createArticle , readArticle , deleteArticle , readMoreArticles , updateArticle } from "../Controllers/articles.js";

const router = express.Router();
router.use(bodyParser.json());

router.post ("/", createArticle);
router.post ("/names/:yourname", readArticle);
router.get("/more", readMoreArticles)
router.put ("/names/:id" , updateArticle);
router.delete("/names/:id" ,deleteArticle )





export default router;


