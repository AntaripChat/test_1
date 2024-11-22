import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/pro')
.then(()=>console.log("DB connect"))
.catch((err)=>console.log(err));