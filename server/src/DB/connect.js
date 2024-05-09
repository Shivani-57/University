    import mongoose from "mongoose";
    import { MONGODB_URI } from "../config.js";

    async function connectDb(){
        try{
            await mongoose.connect(MONGODB_URI)
        }
        catch(err){
            console.log("error in connect.js")
            console.log("MongoDB connection error: " + err)
        }
        

    }
    export default connectDb;