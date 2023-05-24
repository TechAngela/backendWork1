import commentModel from "../Models/comment.js";
const createComment = async (req, res) => {

     try {
          const commentInstance = new commentModel({
               email: req.body.email,
               comment: req.body.comment,
               // articleId: req.body.articleId
               articleId:req.params.id


          });
          let response = await commentInstance.save()
          res.status(200).json({
               message: "comment posted successfully",
               response: response,
          })



     } catch (error) {
          console.log("error occured" + error),
               res.status(500).json({
                    message: "error occured"
               })

     }
}
export default createComment;