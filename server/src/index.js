import connectDb from "./DB/connect.js";
import { app } from "./app.js";
import { PORT } from "./config.js";

connectDb()
.then(()=>{
    console.log("Database connection successful");
})
.catch((err)=>{
    console.log("Database connection failed " + err)
})

app.listen(PORT,function(){
    console.log("Server listening on port " + PORT)
})