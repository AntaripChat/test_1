import movieModel from "../model/movie.model.js";

export const movieMiddle = async (req,res,next) =>{
    if(!req.body.name){
        return res.send('Please Enter The Movie Name');
    };
    const name = await movieModel.findOne({
        name:req.body.name
    });
    if(name){
        return res.send('Movie Name Already exists');
    };

    next();
}