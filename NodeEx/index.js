import  Express  from "express"
import mongoose from 'mongoose'
import cors from "cors"
import welcome from "./Controllers/welcome.js";
import articles from "./Routes/articles.js";
import comment from "./Routes/comment.js";
import signup from "./Routes/register.js";
import signin from "./Routes/signin.js"

const app= Express();
app.use(cors());
app.get ("/api/v1",welcome );
app.use("/api/v1/articles", articles);
app.use("/api/v1/comment", comment);
app.use("/api/v1",signup);
app.use("/api/v1",signin);

const port = 3000;

const connectMongo=()=>{
mongoose.connect('mongodb+srv://Angel:Angela@angeldb.ofbwpgd.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
     console.log("connected to mongodb");
}).catch((error) => {
     console.log("connection failed" ,error);
})

}

app.listen(port, ()=>{
   console.log("connected to port" + port );
   connectMongo();
});