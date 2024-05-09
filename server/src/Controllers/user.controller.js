import { asyncHandler } from "../Utils/asyncHandler.js";

const singupUser  = asyncHandler(async(req,res)=>{
    console.log("In signup User")
    const {name,email,password} = req.body;
    console.log(name,email,password)
})

export {singupUser}