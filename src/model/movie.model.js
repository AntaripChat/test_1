import mongoose from "mongoose";

const movieModel = new mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique:true
    }
});

export default mongoose.model('Movie',movieModel);