import dotenv from "dotenv";
dotenv.config({ path: './.env' });

const PORT = process.env.PORT 
const MONGODB_URI = process.env.MONGODB_URI


export {
    MONGODB_URI,
    PORT
}