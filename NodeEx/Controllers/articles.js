import articleModels from "../Models/article.js";

const createArticle = async (req, res) => {
     //const data = req.body;
     try {
          //     const data = req.body;
          const articleInstance = new articleModels({
               title: req.body.title,
               content: req.body.content,
               author: req.body.author,
               image: req.body.image,
               pages: req.body.pages
          });
          let response = await articleInstance.save()
          res.status(200).json(
               {
                    message: "data saved successfull",
                    error: null,
                    data: response
               }
          )


     } catch (error) {
          console.log("error occured" + error);
          res.send(error)
     }
}
const readArticle = (req, res) => {

     try {
           const blogid = req.params.reqid;
           
          
     } catch (error) {
          console.log("error occured" + error)
          res.status(500).json({
               error: error

          })
     }
}
const readMoreArticles = (req, res) => {
     const start = req.query.start;
     // res.send(start);
     let a = req.query.name
     res.send(req.query);//to get both
}
// const putExerciseArticles =(req , res)=>{
//      let queryId = req.query.id;
//      let bodyData = req.body;
//      res.send(queryId);
// }

const deleteArticle = (req, res) => {
     // res.send("this is the delete article controller")
     let a = req.query.id;
     res.send(req.query);

}
const updateArticle = (req, res) => {
     const id = req.params.id;
     const bodyData = req.body;
     try {
          res.send([id, bodyData]);
     } catch (error) {
          console.log("error occured" + error)
     }
}



export { createArticle, readArticle, deleteArticle, readMoreArticles, updateArticle}
