import express from "express"
import bodyParser from "body-parser";
import { createArticle,readArticle,readMoreArticles, putExerciseArticles,readArticlesLimited,updateArticle, deleteArticle} from "../Controllers/articles.js";

const router = express.Router();
router.use(bodyParser.json());

router.post ("/create", createArticle);
router.post ("/names/:yourname", readArticle);
router.get("/more", readMoreArticles)
router.put ("/names/:id" , updateArticle);
router.delete("/names/:id" ,deleteArticle )
router.put("/exercise",putExerciseArticles);
router.get("/", readArticlesLimited);





export default router;


