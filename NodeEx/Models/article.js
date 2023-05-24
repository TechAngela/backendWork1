import mongoose from "mongoose";
const articlesSchema = new mongoose.Schema({
     title: {
          type: String,
          required: "title must be there"
     },
     content: {
          type: String,
          required: "content required"
     },
     author: {
          type: String,
          required: "author required"
     },

     image: {
          type: String,
          
     },
     pages: {
          type: Number,
          
     }


});
export default mongoose.model("articles", articlesSchema)