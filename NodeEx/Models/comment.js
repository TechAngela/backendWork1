import mongoose from "mongoose";
const articleComment = new mongoose.Schema({
     email: {
          type: String,
          required: "Email required"
     },
     comment: {
          type: String,
          required: "Comment required"
     },
     articleId: {
          type: String,
          required: "Article Id required"

     }


});
export default mongoose.model("comments", articleComment);