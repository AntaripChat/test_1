import { getAllMovie,addMovie } from "../controller/movie.controllers.js";
import { movieMiddle } from "../middleware/movie.middleware.js";



export default (app) =>{
    app.get('/api/v1/allmovie',getAllMovie),
    app.post('/api/v1/addmovie',movieMiddle,addMovie)
}