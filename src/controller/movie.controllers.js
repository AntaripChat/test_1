import movieModel from "../model/movie.model.js";

export const getAllMovie = async(req,res) =>{
    const allMovie = await movieModel.find();
    return res.send(allMovie)
}

export const addMovie = async(req,res) =>{
    const movie = new movieModel({
        name:req.body.name
    });
    try{
        await movie.save();
        return res.send('Data Save');
    }catch(err){
        return res.send(err)
    }
}