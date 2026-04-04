import { axiosWrapper } from "./axiosWrapper";

//List all end points
export const getTopMoviesByVotes=()=>axiosWrapper.get('/movies/top');

export const getAllMovies=()=>axiosWrapper.get('/movies');

export const getMovieById=(id)=>axiosWrapper.get(`/movies/${id}`);

export const getShowsByMovieDateLocation=(movieId,date,location)=>axiosWrapper.get('/shows',{
  params:{movieId,date,location}
});

export const getShowById=(id)=>axiosWrapper.get(`/shows/${id}`);